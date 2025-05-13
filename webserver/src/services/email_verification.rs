use dashmap::DashMap;
use once_cell::sync::Lazy;
use rand::Rng;
use std::time::{Duration, Instant};
use tokio::time;

static VERIFICATION_CODES: Lazy<DashMap<String, (String, Instant)>> = Lazy::new(DashMap::new);
const EXPIRATION_TIME: Duration = Duration::from_secs(300); // 5分钟

pub async fn generate_and_send_code(email: &str) -> Result<(), String> {
    let code = generate_code();
    let now = Instant::now();

    VERIFICATION_CODES.insert(email.to_string(), (code.clone(), now));

    // 调用你已有的邮件发送逻辑
    crate::services::user_service::send_verification_email(email, &code)
        .map_err(|e| format!("Failed to send email: {}", e))?;

    Ok(())
}

pub fn verify_code(email: &str, submitted_code: &str) -> bool {
    if let Some((stored_code, timestamp)) = VERIFICATION_CODES.get(email).map(|v| v.clone()) {
        if timestamp.elapsed() < EXPIRATION_TIME && stored_code == submitted_code {
            VERIFICATION_CODES.remove(email); // 一次性验证码
            return true;
        }
    }
    false
}

fn generate_code() -> String {
    let mut rng = rand::thread_rng();
    format!("{:06}", rng.gen_range(0..=999999))
}

// 可选：后台清理过期验证码（你可以用 tokio::spawn 启动它）
pub async fn start_cleanup_task() {
    loop {
        time::sleep(Duration::from_secs(60)).await;
        let now = Instant::now();
        VERIFICATION_CODES.retain(|_, (_, timestamp)| now.duration_since(*timestamp) < EXPIRATION_TIME);
    }
}

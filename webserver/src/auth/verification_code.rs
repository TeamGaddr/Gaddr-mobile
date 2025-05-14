use std::collections::HashMap;
use std::sync::{Arc, RwLock};
use rand::Rng;
use chrono::{Utc, Duration, DateTime};

#[derive(Clone)]
pub struct VerificationCodeStore {
    codes: Arc<RwLock<HashMap<String, (String, DateTime<Utc>)>>>,
}

impl VerificationCodeStore {
    pub fn new() -> Self {
        VerificationCodeStore {
            codes: Arc::new(RwLock::new(HashMap::new())),
        }
    }

    pub fn insert_code(&self, email: &str, code: String) {
        let expires_at = Utc::now() + Duration::minutes(5);
        self.codes.write().unwrap().insert(email.to_string(), (code, expires_at));
    }

    pub fn verify(&self, email: &str, code: &str) -> bool {
        if let Some((stored_code, expires_at)) = self.codes.read().unwrap().get(email) {
            stored_code == code && *expires_at > Utc::now()
        } else {
            false
        }
    }
}

pub async fn generate_and_send_code(store: &VerificationCodeStore, email: &str) -> Result<String, ()> {
    let code = format!("{:06}", rand::thread_rng().gen_range(0..999999));
    store.insert_code(email, code.clone());
    Ok(code)
}

pub fn verify_code(store: &VerificationCodeStore, email: &str, code: &str) -> bool {
    store.verify(email, code)
}

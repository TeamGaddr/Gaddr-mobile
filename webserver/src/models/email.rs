use serde::Serialize;

#[derive(Serialize)]
pub struct EmailRequest {
    pub sender: Sender,
    pub to: Vec<Recipient>,
    pub subject: String,
    pub textContent: String,
}

#[derive(Serialize)]
pub struct Sender {
    pub email: String,
    pub name: String,
}

#[derive(Clone, Debug, Serialize)]
pub struct Recipient {
    pub email: String,
    pub name: String,
}
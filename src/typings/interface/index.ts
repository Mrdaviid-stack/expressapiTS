export interface UsersInfo {
  id: number;
  username: string;
  password: string;
}

export interface Token {
  token: string;
}

export interface MailDetails {
  from: string;
  to: string;
  cc: string;
  bcc: string;
  subject: string;
  text: string;
  html: string
}

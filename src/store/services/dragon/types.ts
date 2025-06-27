export interface AuthSessionParams {
  password: string;
  email: string;
  domain: string;
}

export interface AuthSessionResponse {
  accessToken: string;
}

export interface AuthSendEmailToResetPasswordParams {
  email: string;
  domain: string;
}

export interface ResetPasswordParams {
  token: string;
  password: string;
  confirmPassword: string;
}

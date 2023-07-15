export interface IUserLoginInput {
  username: string;
  password: string;
}

export interface AuthGenericResponse {
  status: string;
  accessToken?: string;
  message?: string;
}

export interface IUserResponse {
  status: string;
  error?: string;
}

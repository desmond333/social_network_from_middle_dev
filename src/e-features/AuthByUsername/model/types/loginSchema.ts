export interface LoginSchema {
  username: string;
  password: string;
  error: unknown;
  isLoading: boolean;
}
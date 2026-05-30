export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface RegisterUserResponse {
  id: string;
  name: string;
  email: string;
}

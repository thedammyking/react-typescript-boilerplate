export interface StoreState<T> {
  [key: string]: T;
}

export interface StoreAction {
  type: string;
  accessToken?: string;
  refreshToken?: string;
  error?: {};
  isAuthenticated?: boolean;
}

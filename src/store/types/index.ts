export interface AppReducer {
  isAuthenticated: boolean;
  appLoaded: boolean;
  redirectTo?: string;
}

export interface StoreState {
  app: AppReducer;
}

export interface StoreAction {
  type: string;
  accessToken?: string;
  refreshToken?: string;
  error?: {};
}

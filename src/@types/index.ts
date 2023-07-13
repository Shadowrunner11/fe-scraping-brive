export interface AuthProvider {
  isAuthenticated: boolean;
  login(params: unknown): Promise<{ redirectTo?: string } | undefined>;
  logout(params: unknown): Promise<void | false | string>;
  checkAuth(params?: unknown): Promise<boolean>;
  checkError?(error: unknown): Promise<void>;
  getIdentity?(): Promise<UserIdentity>;
  getPermissions?(params: unknown): Promise<unknown>;
  handleCallback?(): Promise<AuthRedirectResult | void | unknown>;
}

export interface UserIdentity {
  id: string | number;
  fullName?: string;
  avatar?: string;
  [key: string]: unknown;
}

export type AuthRedirectResult = {
  redirectTo?: string | false;
  logoutOnFailure?: boolean;
};

export interface AuthResponse {
  userId: string;
  expiresIn: number;
  authState: string;
  token: string;
}

export interface RegisterPayload {
  userName: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

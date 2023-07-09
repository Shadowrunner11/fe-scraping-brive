import { AxiosInstance } from "axios";

interface AuthResponse {
  token: string;
  expiresIn: number;
  userId: number;
  firstName: number;
  lastName: number;
}

export class AuthFacade {
  constructor(private client: AxiosInstance) {}

  async login(username: string, password: string) {
    const { data } = await this.client.post<AuthResponse>("/login", {
      username,
      password,
    });

    this.client.defaults.headers.common = {
      ...this.client.defaults.headers.common,
      Authorization: `Bearer ${data.token}`,
    };

    return data;
  }

  async logout(username: string, token: string) {
    const { data } = await this.client.post<string>("/logout", {
      username,
      token,
    });

    delete this.client.defaults.headers.common.Authorization;

    return data;
  }

  async checkAuth(token?: string) {
    const { data } = await this.client.get<AuthResponse>("/auth", {
      params: {
        token,
      },
    });

    return data;
  }
}

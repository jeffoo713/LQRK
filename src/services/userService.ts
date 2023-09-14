import axios, { AxiosResponse, AxiosInstance } from 'axios';

type User = {
  token: string;
  user: {
    id: number;
    username: string;
  };
};

type SignInResponse =
  | User & {
      errors: string[];
    };

class UserService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.USER_SERVICE_BASE_URL,
      timeout: 10000,
      headers: { Authorization: JSON.parse(localStorage.getItem('user') || '')?.username },
    });
  }

  async signIn(username: string): Promise<SignInResponse> {
    const query = `
      mutation {
        signIn(input: {
          username: "${username}"
        }) {
          token
          user {
            id
            username
          }
          errors
        }
      }
    `;

    const response: AxiosResponse = await this.axios.post(`/graphql`, {
      query,
    });

    const { user, token } = response.data.data.signIn;
    this.storeUserInLocalstorage({ user, token });

    return response.data.data.signIn;
  }

  private storeUserInLocalstorage = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user.user));
    localStorage.setItem('user-token', JSON.stringify(user.token));
  };
}

export default new UserService();

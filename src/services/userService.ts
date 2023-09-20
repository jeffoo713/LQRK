import axios, { AxiosResponse, AxiosInstance } from 'axios';
import localstorageService from './localstorageService';

class UserService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.USER_SERVICE_BASE_URL,
      timeout: 10000,
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

    return response.data.data.signIn;
  }

  async getUserLiquorData(userId: number) {
    const query = `
      query {
        user(id: ${userId}) {
          liquors {
            id
            name
            liquorType
            rating
          }
        }
      }
    `;

    const response: AxiosResponse = await this.axios.post(
      `/graphql`,
      {
        query,
      },
      { headers: { Authorization: localstorageService.userToken } }
    );

    return response.data.data.user.liquors;
  }
}

export default new UserService();

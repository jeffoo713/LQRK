type SignInResponse = {
  token: string;
  user: {
    id: number;
    username: string;
  };
  errors: string[];
};
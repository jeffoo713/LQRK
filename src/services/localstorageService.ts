class LocalStorageService {
  storeUserInLocalStorage = (userData: { id: number; username: string }, token: string) => {
    const { id: userId, username } = userData;

    localStorage.setItem('user', JSON.stringify({ userId, username }));
    localStorage.setItem('user-token', JSON.stringify(token));
  };

  removeUserInLocalstorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('user-token');
  };

  get userToken(): string | null {
    return localStorage.getItem('user-token') ? JSON.parse(localStorage.getItem('user-token')!) : '';
  }

  get userData(): { userId: number; username: string } | null {
    return localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')!);
  }
}

export default new LocalStorageService();

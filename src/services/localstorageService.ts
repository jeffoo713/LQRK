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

  get userToken() {
    return localStorage.getItem('user-token');
  }
}

export default new LocalStorageService();

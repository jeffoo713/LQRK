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
}

export default new LocalStorageService();

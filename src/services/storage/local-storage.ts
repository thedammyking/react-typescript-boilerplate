interface TokenObject {
  accessToken?: string;
  refreshToken?: string;
}

const _setMultipleItems = (storageItems: string[][]) => {
  storageItems.map((item) => window.localStorage.setItem(item[0], item[1]));
};

// const _getMultipleItems = storageItems => {
//   return storageItems.map(item => window.localStorage.getItem(item))
// }

const _clearMultipleItems = (keys: string[]) => {
  keys.map((item) => window.localStorage.removeItem(item));
};

export default {
  setToken: (tokenObj: TokenObject) =>
    _setMultipleItems([
      ['accessToken', tokenObj.accessToken || ''],
      ['refreshToken', tokenObj.refreshToken || ''],
    ]),
  setUser: (userObject) =>
    window.localStorage.setItem('user', JSON.stringify(userObject)),
  getAccessToken: () => window.localStorage.getItem('accessToken'),
  getRefreshToken: () => window.localStorage.getItem('refreshToken'),
  getUser: () => JSON.parse(window.localStorage.getItem('user') || ''),
  clearStorage: () =>
    _clearMultipleItems(['accessToken', 'refreshToken', 'user']),
};

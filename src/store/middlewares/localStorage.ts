import { LOGIN, LOGOUT /* RESET_TOKEN, UPDATE_USER */ } from 'app/store';
import { LocalStorageService } from 'services';
import { StoreAction } from '../types';

const localStorageMiddleware = (store: any) => (next: any) => (
  action: StoreAction
) => {
  const { type, accessToken, refreshToken, error } = action;
  if (type === LOGIN) {
    if (!error) {
      LocalStorageService.setToken({ accessToken, refreshToken });
    }
    // } else if (type === UPDATE_USER) {
    //   if (!error) {
    //     LocalStorageService.setUser(user);
    //   }
    // } else if (type === RESET_TOKEN) {
    //   if (!error) {
    //     LocalStorageService.setToken({ accessToken, refreshToken });
    //   }
  } else if (type === LOGOUT) {
    LocalStorageService.clearStorage();
  }

  next(action);
};

export default localStorageMiddleware;

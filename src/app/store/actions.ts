import { APP_LOAD, REDIRECT } from './types';
import { LocalStorageService } from 'services';
import { StoreAction } from 'store/types';

export const onAppLoad = (): StoreAction => {
  const isAuthenticated = !!LocalStorageService.getAccessToken();

  return {
    type: APP_LOAD,
    isAuthenticated,
  };
};

export const onRedirect = (): StoreAction => ({
  type: REDIRECT,
});

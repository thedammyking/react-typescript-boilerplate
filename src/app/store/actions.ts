import { APP_LOAD, REDIRECT } from './types';
import { LocalStorageService } from 'services';

export const onAppLoad = () => {
  const isAuthenticated = !!LocalStorageService.getAccessToken();

  return {
    type: APP_LOAD,
    isAuthenticated,
  };
};

export const onRedirect = () => ({
  type: REDIRECT,
});

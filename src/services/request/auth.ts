import { serviceInstance } from 'libs';

export default {
  signIn: (body: any) =>
    serviceInstance
      .post(`/auth/login`, { ...body })
      .then(({ data: { data } }) => data),
  signUp: (body: any) =>
    serviceInstance
      .post(`/auth/register`, body)
      .then(({ data: { data } }) => data),
};

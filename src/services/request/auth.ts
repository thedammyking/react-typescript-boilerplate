import { serviceInstance } from 'libs';

export default {
  signIn: (body) =>
    serviceInstance
      .post(`/auth/login`, { ...body })
      .then(({ data: { data } }) => data),
  signUp: (body) =>
    serviceInstance
      .post(`/auth/register`, body)
      .then(({ data: { data } }) => data),
};

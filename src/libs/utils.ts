export const querystring = (search: string = window.location.search) => {
  return new URLSearchParams(search);
};

export const navigate = (uri: string): void => {
  window.location.href = `${window.location.origin}/${uri}`;
};

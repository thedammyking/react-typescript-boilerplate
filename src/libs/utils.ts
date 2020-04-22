export const querystring = (search = window.location.search) => {
  const searchParams = new URLSearchParams(search);
  return searchParams;
};

export const navigate = (uri) => {
  return (window.location = `${window.location.origin}/${uri}`);
};

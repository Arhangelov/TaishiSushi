export const logout = () => {
  return fetch("/auth/logout")
    .then((res) => res.json())
    .then((data) => data);
};

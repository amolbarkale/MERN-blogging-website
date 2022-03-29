export const LoginStart = () => ({
  type: "LOGIN_START",
});

export const LOGIN = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

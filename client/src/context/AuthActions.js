export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Follow = (userId) => ({
  type: "FOLLOW",
  payload: userId,
});

export const Unfollow = (userId) => ({
  type: "UNFOLLOW",
  payload: userId,
});


export const LogoutStart = () => ({
  type: "LOGOUT_START",
});

export const LogoutSuccess = () => ({
  type: "LOGOUT_SUCCESS",
});

export const LogoutFailure = () => ({
  type: "LOGOUT_FAILURE",
});
export const LoginBegin = (userCredentials) => ({
    type: "LOGIN_BEGIN",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const LoginFailed = () => ({
    type: "LOGIN_FAILED",
});

export const Follow = (userId) => ({
    type: "FOLLOW",
    payload: userId,
});

export const Unfollow = (userId) => ({
    type: "UNFOLLOW",
    payload: userId,
});
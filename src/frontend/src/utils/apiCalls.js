import axios from 'axios';
export const login = async (credentials, dispatch) => {
    dispatch({ type: "LOGIN_BEGIN" });
    try {
        const res = await axios.post("auth/login", credentials)
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
        dispatch({ type: "LOGIN_FAILED", payload: err });
    }
}
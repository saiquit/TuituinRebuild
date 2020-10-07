import user_types from "./user_type";
import axios from "axios";

export const userLoginStart = () => ({
  type: user_types.USER_LOGIN_START,
});

export const userLoginSuccess = (user) => ({
  type: user_types.USER_LOGIN_SUCCESS,
  payload: user,
});

const userLogInFailed = (error) => ({
  type: user_types.USER_LOGIN_FAILED,
  payload: error,
});
export const addTemporaryJob = (payload) => ({
  type: user_types.ADD_POSTED_JOBS,
  payload,
});

export const updateEduInfo = (payload) => ({
  type: user_types.UPDATE_EDUCATION,
  payload,
});

export const fetchUserAsync = (token) => {
  return async (dispatch) => {
    try {
      dispatch(userLoginStart());
      const userData = await axios.get("/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(userLoginSuccess(userData.data));
    } catch (error) {
      dispatch(userLogInFailed(error.message));
    }
  };
};

import user_type from "./user_type";

const initialState = {
  loading: false,
  user: null,
  error: null,
  signedUpAs: null,
  iniFormVal: null,
  token: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case user_type.USER_LOGIN_START:
      return { ...state, loading: true };
    case user_type.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case user_type.USER_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case user_type.ADD_POSTED_JOBS:
      return {
        ...state,
        user: {
          ...state.user,
          postedJobs: [...state.user.postedJobs, payload],
        },
      };
    case user_type.UPDATE_EDUCATION:
      return {
        ...state,
        user: {
          ...state.user,
          educationInfo: [...payload],
        },
      };
    default:
      return state;
  }
};

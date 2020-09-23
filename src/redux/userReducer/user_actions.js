import user_types from "./user_type";
import axios from "axios";

export const userLoginStart = () => ({
  type: user_types.USER_LOGIN_START,
});

const userLoginSuccess = (user) => ({
  type: user_types.USER_LOGIN_SUCCESS,
  payload: user,
});

const userLogInFailed = (error) => ({
  type: user_types.USER_LOGIN_FAILED,
  payload: error,
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
      dispatch(userLogInFailed(error));
    }
  };
};

// export const fetchUserData = (uid) => {
//   return async (dispatch) => {
//     dispatch(userLoginStart());
//     try {
//       let unSub = await firebase
//         .firestore()
//         .collection("users")
//         .doc(uid)
//         .onSnapshot((doc) => {
//           if (!doc) {
//             console.log("No matching documents.");
//             dispatch(userLogInFailed("No matching documents."));
//             return null;
//           }
//           dispatch(getUserData(doc.data()));
//         });

//       return unSub;
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

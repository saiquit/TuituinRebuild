import jobTypes from "./job_types";
import axios from "axios";

export const jobFetchingStart = () => ({
  type: jobTypes.JOBS_FETCHING_START,
});

export const jobFetchingSuccess = (payload) => ({
  type: jobTypes.JOBS_FETCHING_SUCCESS,
  payload,
});

export const jobFetchingError = (payload) => ({
  type: jobTypes.JOBS_FETCHING_FAILED,
  payload,
});

export const jobFilteringSuccess = (payload) => ({
  type: jobTypes.JOB_FILTER_SUCCESS,
  payload,
});
export const jobFilterReset = () => ({
  type: jobTypes.JOB_FILTER_RESET,
});

export const filterDrawerOpen = (payload) => ({
  type: jobTypes.JOB_DRAWER_OPEN,
  payload,
});

export const jobFetchingAsync = () => {
  return async (dispatch) => {
    dispatch(jobFetchingStart());
    try {
      const jobs = await (await axios.get("/jobs")).data;
      dispatch(jobFetchingSuccess(jobs));
    } catch (error) {
      dispatch(jobFetchingError(error));
    }
  };
};

// export const jobFiltering = (
//   District,
//   Area,
//   TutorType,
//   Medium,
//   Class,
//   Subject,
// ) => {
//   return (dispatch) => {
//     dispatch(jobFetchingStart());

//     firestore
//       .collection("jobs")
//       .where("District", "==", District)
//       .where("Area", "==", Area)
//       .where("TutorType", "==", TutorType)
//       .where("Medium", "==", Medium)
//       .where("Class", "==", Class)
//       .where("Subject", "array-contains-any", Subject)
//       .get()
//       .then((docs) => {
//         const filteredData = [];
//         docs.forEach((doc) => filteredData.push(doc.data()));
//         console.log(filteredData);
//         dispatch(jobFilteringSuccess(filteredData));
//       })
//       .catch((err) => {
//         jobFetchingError(err);
//       });
//   };
// };

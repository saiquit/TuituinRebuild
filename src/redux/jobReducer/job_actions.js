import jobTypes from "./job_types";
import { firebase, firestore } from "../../config/firebaseConfig";

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
    const snapShot = await firebase
      .firestore()
      .collection("jobs")
      .onSnapshot((doc) => {
        if (doc.empty) {
          dispatch(jobFetchingError("No Jobs Found"));
        }
        const job = doc.docs.map((doc) => doc.data());
        dispatch(jobFetchingSuccess(job));
      });
    return snapShot;
  };
};

export const jobFiltering = (
  District,
  Area,
  TutorType,
  Medium,
  Class,
  Subject,
) => {
  return (dispatch) => {
    dispatch(jobFetchingStart());

    firestore
      .collection("jobs")
      .where("District", "==", District)
      .where("Area", "==", Area)
      .where("TutorType", "==", TutorType)
      .where("Medium", "==", Medium)
      .where("Class", "==", Class)
      .where("Subject", "array-contains-any", Subject)
      .get()
      .then((docs) => {
        const filteredData = [];
        docs.forEach((doc) => filteredData.push(doc.data()));
        console.log(filteredData);
        dispatch(jobFilteringSuccess(filteredData));
      })
      .catch((err) => {
        jobFetchingError(err);
      });
  };
};

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

export const jobFetchingAndFilteringSuccess = (payload) => ({
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

export const jobFetchingAndFiltering = (values) => {
  return async (dispatch) => {
    try {
      dispatch(jobFetchingStart());
      const filteredData = await axios.get("/jobs", {
        params: { ...values },
        headers: { "Content-Type": "application/json" },
      });
      dispatch(jobFetchingSuccess(filteredData.data));
    } catch (error) {
      dispatch(jobFetchingError(error));
    }
  };
};

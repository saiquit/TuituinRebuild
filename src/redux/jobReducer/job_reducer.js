import job_types from "./job_types";

const initialState = {
  jobLoading: false,
  jobs: [],
  error: null,
  filteredJobs: [],
  filtered: false,
  filterDrawer: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case job_types.JOBS_FETCHING_START:
      return { ...state, jobLoading: true };
    case job_types.JOBS_FETCHING_SUCCESS:
      return { ...state, jobs: payload, jobLoading: false };
    case job_types.JOBS_FETCHING_FAILED:
      return { ...state, error: payload, jobLoading: false };
    case job_types.JOB_FILTER_SUCCESS:
      return {
        ...state,
        filteredJobs: payload,
        jobLoading: false,
        filtered: true,
      };
    case job_types.JOB_FILTER_RESET:
      return { ...state, filteredJobs: [], filtered: false };
    case job_types.JOB_DRAWER_OPEN:
      return { ...state, filterDrawer: payload };
    default:
      return state;
  }
};

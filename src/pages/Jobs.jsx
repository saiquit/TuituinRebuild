import React, { useEffect } from "react";
import { connect } from "react-redux";
import { jobFetchingAsync } from "../redux/jobReducer/job_actions";
import SingleJob from "../components/SingleJob";

export const Jobs = ({ jobFetchingAsync, jobs }) => {
  useEffect(() => {
    jobFetchingAsync();
    return () => {};
  }, []);
  return (
    <div>
      <div className="job_cover">
        {jobs.map((job, i) => (
          <SingleJob job={job} key={i} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ jobs: { jobs } }) => ({
  jobs,
});

const mapDispatchToProps = (dispatch) => ({
  jobFetchingAsync: () => dispatch(jobFetchingAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);

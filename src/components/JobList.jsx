import React, { Suspense, useEffect } from "react";
import Spinner from "./Spinner/Spinner";
import { Card, Skeleton, Pagination } from "antd";
import { connect } from "react-redux";

import { jobFetchingAndFiltering } from "../redux/jobReducer/job_actions";

const SingleJob = React.lazy(() => import("./SingleJob"));
const NotFound = React.lazy(() => import("../components/NotFound"));

const JobList = ({ jobLoading, jobs, totalJobs, jobFetchingAndFiltering }) => {
  const loadingArr = [1, 2, 3, 4, 5, 6, 7, 8];
  const handlePage = (value) => {
    jobFetchingAndFiltering({ page: value });
  };
  useEffect(() => {
    jobFetchingAndFiltering();
    return () => {};
  }, []);
  return (
    <Suspense fallback={<Spinner />}>
      {!jobLoading
        ? jobs.map((job, i) => (
            <React.Fragment key={i}>
              <SingleJob job={job} />
            </React.Fragment>
          ))
        : loadingArr.map((item) => (
            <Card
              key={item}
              style={{ margin: "20px", borderRadius: 25, padding: 25 }}
            >
              <Skeleton active loading={jobLoading} />
            </Card>
          ))}

      {!jobs.length && !jobLoading && <NotFound />}
      {jobs.length && (
        <Pagination
          onChange={handlePage}
          defaultCurrent={1}
          style={{ textAlign: "center" }}
          total={totalJobs || 10}
          pageSize={2}
        />
      )}
    </Suspense>
  );
};
const mapDispatchToProps = (dispatch) => ({
  jobFetchingAndFiltering: (value) => dispatch(jobFetchingAndFiltering(value)),
});
export default connect(null, mapDispatchToProps)(JobList);

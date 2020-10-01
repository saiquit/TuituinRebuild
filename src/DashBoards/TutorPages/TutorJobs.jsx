import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { Card, Skeleton, Pagination } from "antd";
import JobList from "../../components/JobList";
const JobSidebarButton = React.lazy(() =>
  import("../../components/JobSidebarButton"),
);
function TutorJobs() {
  const { jobLoading, jobs, totalJobs } = useSelector(({ jobs }) => jobs);
  console.log(totalJobs);

  return (
    <Suspense fallback={<Spinner />}>
      <JobList jobLoading={jobLoading} totalJobs={totalJobs} jobs={jobs} />

      <JobSidebarButton />
    </Suspense>
  );
}

export default TutorJobs;

import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import JobList from "../../components/JobList";
const JobSidebarButton = React.lazy(() =>
  import("../../components/JobSidebarButton"),
);
function TutorJobs() {
  const { jobLoading, jobs, totalJobs } = useSelector(({ jobs }) => jobs);

  return (
    <Suspense fallback={<Spinner />}>
      <JobList jobLoading={jobLoading} totalJobs={totalJobs} jobs={jobs} />
      <JobSidebarButton />
    </Suspense>
  );
}

export default TutorJobs;

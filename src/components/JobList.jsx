import React from "react";
import SingleJob from "./SingleJob";

const JobList = ({ jobs }) => {
  return (
    <div className="job_cover">
      {jobs.map((job, i) => (
        <SingleJob job={job} key={i} />
      ))}
    </div>
  );
};

export default JobList;

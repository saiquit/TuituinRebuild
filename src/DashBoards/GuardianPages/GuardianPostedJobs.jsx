import React from "react";
import { useSelector } from "react-redux";
import SingleJob from "../../components/SingleJob";

function GuardianPostedJobs() {
  const { postedJobs } = useSelector(({ user }) => user.user);
  return (
    <div>
      {postedJobs.map((job, i) => (
        <SingleJob key={i} job={job} />
      ))}
    </div>
  );
}

export default GuardianPostedJobs;

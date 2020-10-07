import React from "react";
import { useSelector } from "react-redux";
import SingleJob from "../../components/SingleJob";
import NotFound from "../../components/NotFound";

function GuardianPostedJobs() {
  const { postedJobs, role } = useSelector(({ user }) => user.user);
  return (
    <div>
      {postedJobs.length ? (
        postedJobs.map((job, i) => <SingleJob role={role} key={i} job={job} />)
      ) : (
        <NotFound
          title="404"
          status="404"
          subTitle="You haven't posted any Job"
        />
      )}
    </div>
  );
}

export default GuardianPostedJobs;

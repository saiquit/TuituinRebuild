import React, { Suspense, useEffect, useRef, useState } from "react";

import { connect } from "react-redux";
import {
  // jobFetchingAsync,
  jobFetchingAndFiltering,
} from "../redux/jobReducer/job_actions";
import { Layout } from "antd";
import styled from "styled-components";
import Spinner from "../components/Spinner/Spinner";

const JobPageSideBar = React.lazy(() => import("../components/JobPageSideBar"));
const JobList = React.lazy(() => import("../components/JobList"));

const { Sider } = Layout;
export const Jobs = ({
  jobFetchingAsync,
  jobs,
  jobLoading,
  jobFetchingAndFiltering,
  history,
  totalJobs,
}) => {
  const [sticky, setSticky] = useState(false);
  const scrollFunc = () => {
    let pageOffset = window.pageYOffset;
    if (pageOffset >= 63) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  const layoutRef = useRef(null);

  useEffect(() => {
    jobFetchingAndFiltering(history.location?.state);

    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <div>
        <Layout ref={layoutRef} style={{ minHeight: "100vh" }}>
          <Sidebar
            theme="light"
            width="450px"
            sticky={sticky ? 1 : undefined}
            className="sidebar_cover"
          >
            <JobPageSideBar
              totalJobs={totalJobs}
              state={history.location?.state}
            />
          </Sidebar>
          <Layout
            style={
              sticky
                ? { marginLeft: "450px", overflow: "hidden" }
                : { marginLeft: "0px", overflow: "hidden" }
            }
          >
            <JobList
              jobLoading={jobLoading}
              totalJobs={totalJobs}
              jobs={jobs}
            />
          </Layout>
        </Layout>
      </div>
    </Suspense>
  );
};

const mapStateToProps = ({ jobs: { jobs, jobLoading, totalJobs } }) => ({
  jobs,
  jobLoading,
  totalJobs,
});

const mapDispatchToProps = (dispatch) => ({
  // jobFetchingAsync: () => dispatch(jobFetchingAsync()),
  jobFetchingAndFiltering: (value) => dispatch(jobFetchingAndFiltering(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);

const Sidebar = styled(Sider)`
  position: ${(props) => (props.sticky ? "fixed" : "block")};
  /* width: 250px !important; */
  z-index: 100;
  height: 100vh;
  top: 0;
`;

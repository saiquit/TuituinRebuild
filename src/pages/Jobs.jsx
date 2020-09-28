import React, { useEffect, useRef, useState } from "react";
import { findDOMNode } from "react-dom";

import { connect } from "react-redux";
import {
  jobFetchingAsync,
  jobFetchingAndFiltering,
} from "../redux/jobReducer/job_actions";
import JobList from "../components/JobList";
import { Layout } from "antd";
import styled from "styled-components";
import JobPageSideBar from "../components/JobPageSideBar";

const { Sider } = Layout;
export const Jobs = ({ jobFetchingAsync, jobs, jobFetchingAndFiltering }) => {
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
    // jobFetchingAsync();
    jobFetchingAndFiltering();
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <div>
      <Layout ref={layoutRef} style={{ minHeight: "100vh" }}>
        <Sidebar
          theme="light"
          width="450px"
          sticky={sticky ? 1 : undefined}
          className="sidebar_cover"
        >
          <JobPageSideBar />
        </Sidebar>
        <Layout
          style={sticky ? { marginLeft: "450px" } : { marginLeft: "0px" }}
        >
          <JobList jobs={jobs} />
        </Layout>
      </Layout>
    </div>
  );
};

const mapStateToProps = ({ jobs: { jobs } }) => ({
  jobs,
});

const mapDispatchToProps = (dispatch) => ({
  jobFetchingAsync: () => dispatch(jobFetchingAsync()),
  jobFetchingAndFiltering: (val) => dispatch(jobFetchingAsync(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);

const Sidebar = styled(Sider)`
  position: ${(props) => (props.sticky ? "fixed" : "block")};
  /* width: 250px !important; */
  z-index: 100;
  height: 100vh;
  top: 0;
`;

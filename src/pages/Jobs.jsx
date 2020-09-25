import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { jobFetchingAsync } from "../redux/jobReducer/job_actions";
import JobList from "../components/JobList";
import { Layout } from "antd";
import styled from "styled-components";

const { Sider } = Layout;
export const Jobs = ({ jobFetchingAsync, jobs }) => {
  const divRef = useRef(null);

  useEffect(() => {
    !jobs.length && jobFetchingAsync();
    return () => {};
  }, []);
  return (
    <div ref={divRef}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar>Sider</Sidebar>
        <Layout>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);

const Sidebar = styled(Sider)`
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
`;

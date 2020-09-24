import React from "react";
import { Card, Skeleton, Row, Col } from "antd";

import {
  HomeOutlined,
  AppstoreOutlined,
  DollarCircleOutlined,
  FormOutlined,
} from "@ant-design/icons";

function SingleJob({ isLoading, job, loggedInAs }) {
  const cardContent = () => {
    return (
      <>
        <h2>
          Need a {job.medium} Tutor for {job.className} - For {job.daysPerWeek}
        </h2>
        <p>Job ID: | {job?.createdAt}</p>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <p>
              <AppstoreOutlined /> Tutor Type: {job.tutorType}
            </p>
            <p>
              <HomeOutlined /> Location: {job.district}, {job.area}
            </p>
          </Col>
          <Col span={6}>
            <p>
              <DollarCircleOutlined /> Salary : {job.salary} BDT
            </p>
          </Col>
          <Col span={6}>
            <p>
              <FormOutlined /> Subjects :{" "}
              {job.subjects.map((sub, idx) => (
                <span key={idx}>
                  {sub}
                  {job.subjects.length - 1 === idx ? "." : ","}{" "}
                </span>
              ))}
            </p>
          </Col>
          <Col span={6} style={{ display: "flex", alignItems: "flex-end" }}>
            {/* <JobDescription
              job={job}
              loading={isLoading}
              loggedInAs={loggedInAs}
            /> */}
          </Col>
        </Row>
      </>
    );
  };

  return (
    <>
      <Card style={{ margin: "20px", borderRadius: 25, padding: 25 }}>
        {isLoading ? (
          <Skeleton loading={isLoading} active paragraph={{ rows: 4 }} />
        ) : (
          cardContent()
        )}
      </Card>
    </>
  );
}

export default SingleJob;

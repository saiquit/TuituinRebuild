import React from "react";
import { Card, Skeleton, Row, Col } from "antd";

import {
  HomeOutlined,
  AppstoreOutlined,
  DollarCircleOutlined,
  FormOutlined,
} from "@ant-design/icons";

function SingleJob({ job, loggedInAs }) {
  return (
    <>
      <Card style={{ margin: "20px", borderRadius: 25, padding: 25 }}>
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
          <Col
            span={6}
            style={{ display: "flex", alignItems: "flex-end" }}
          ></Col>
        </Row>
      </Card>
    </>
  );
}

export default SingleJob;

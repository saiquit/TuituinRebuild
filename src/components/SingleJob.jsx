import React from "react";
import { Card, Row, Col, Button } from "antd";

import {
  HomeOutlined,
  AppstoreOutlined,
  DollarCircleOutlined,
  FormOutlined,
  FontColorsOutlined,
  TeamOutlined,
  FieldBinaryOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";
import CardCover from "./CardCover";

function SingleJob({ job, role, history, match }) {
  const {
    medium,
    className,
    daysPerWeek,
    createdAt,
    tutorType,
    district,
    area,
    salary,
    time,
    subjects,
    instituteName,
    numberOfStudents,
  } = job;

  return (
    <>
      <Card style={{ margin: "20px", borderRadius: 25, padding: 25 }}>
        <Row>
          <Col span={20}>
            <h2>
              Need a {medium.replace("_", " ")} Tutor for{" "}
              {className.replace("_", " ")} - For {daysPerWeek}
            </h2>
          </Col>
          <Col span={4}>
            <Link
              to={{
                pathname: `${
                  role === "tutor" ? "/dashboard/details" : "/details"
                }`,
                state: job,
              }}
            >
              <Button type="primary" style={{ float: "right" }}>
                Apply
              </Button>
            </Link>
          </Col>
        </Row>
        <p>Created At: {new Date(createdAt).toDateString()}</p>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <p>
              <AppstoreOutlined /> Tutor Type: {tutorType}
            </p>
            <p>
              <HomeOutlined /> Location: {district}, {area}
            </p>
          </Col>
          <Col span={6}>
            <p>
              <DollarCircleOutlined /> Salary : {salary} BDT
            </p>
            <p>
              <FieldBinaryOutlined /> Time : {time} BDT
            </p>
          </Col>
          <Col span={6}>
            <p>
              <FormOutlined /> Subjects : {subjects.toString() + ","}
            </p>{" "}
            <p>
              <CoffeeOutlined /> Institute Name : {instituteName}
            </p>
          </Col>
          <Col span={6}>
            <p>
              <FontColorsOutlined /> Medium : {medium}
            </p>
            <p>
              <TeamOutlined /> Number Of Student : {numberOfStudents}
            </p>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default withRouter(SingleJob);

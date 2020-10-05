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
import styled from "styled-components";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import ApplyModal from "../components/ApplyModal";

function JobDetails({ location, history }) {
  const [visible, setVisible] = useState(false);
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
    address,
    additionalAddressDescription,
    dateToStart,
  } = location?.state;

  return (
    <Card
      style={{
        margin: "20px",
        borderRadius: 25,
        padding: 25,
        minHeight: "85vh",
      }}
    >
      <Row>
        <Col span={24}>
          <DetailsHeader>
            Need a {medium.replace("_", " ")} Tutor for{" "}
            {className.replace("_", " ")} - For {daysPerWeek}
          </DetailsHeader>
        </Col>
      </Row>
      <CreatedDate>
        <b>Created At:</b> {new Date(createdAt).toDateString()}
      </CreatedDate>
      <Row gutter={[16, 16]} style={{ padding: "20px 0" }}>
        <Col span={12}>
          <DetailsText>
            <AppstoreOutlined /> Tutor Type: {tutorType}
          </DetailsText>
          <DetailsText>
            <HomeOutlined /> Location: {district}, {area}
          </DetailsText>
          <DetailsText>
            <HomeOutlined /> Address: {address}
          </DetailsText>
        </Col>
        <Col span={12}>
          <DetailsText>
            <DollarCircleOutlined /> Salary : {salary} BDT
          </DetailsText>
          <DetailsText>
            <FieldBinaryOutlined /> Time : {new Date(time).toLocaleTimeString()}
          </DetailsText>
          <DetailsText>
            <DollarCircleOutlined /> Additional Address :{" "}
            {additionalAddressDescription}
          </DetailsText>
        </Col>
        <Col span={12}>
          <DetailsText>
            <FormOutlined /> Subjects : {subjects.toString() + ","}
          </DetailsText>{" "}
          <DetailsText>
            <CoffeeOutlined /> Institute Name : {instituteName}
          </DetailsText>
          <DetailsText>
            <CoffeeOutlined /> Date to Start : {dateToStart}
          </DetailsText>
        </Col>
        <Col span={12}>
          <DetailsText>
            <FontColorsOutlined /> Medium : {medium}
          </DetailsText>
          <DetailsText>
            <TeamOutlined /> Number Of Student : {numberOfStudents}
          </DetailsText>
        </Col>
      </Row>
      <Card style={{ display: "flex", justifyContent: "center" }}>
        <CustomButton
          onClick={() => setVisible(true)}
          style={{ margin: "0px 15px" }}
          type="primary"
        >
          Apply
        </CustomButton>
        <CustomButton
          style={{ margin: "0px 15px", backgroundColor: "blue" }}
          onClick={() => history.goBack()}
        >
          Go Back
        </CustomButton>
      </Card>
      <ApplyModal
        job={location?.state}
        visible={visible}
        setVisible={setVisible}
      />
    </Card>
  );
}

export default JobDetails;

const DetailsHeader = styled.h2`
  font-size: 36px;
  text-align: center;
`;
const CreatedDate = styled.p`
  font-size: 25px;
  text-align: center;
`;

const DetailsText = styled.p`
  font-size: 22px;
`;

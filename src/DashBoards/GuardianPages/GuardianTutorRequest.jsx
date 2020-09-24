import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import {
  Form,
  Input,
  Row,
  Col,
  Select,
  Radio,
  TimePicker,
  DatePicker,
  Button,
  Divider,
  Card,
  message,
} from "antd";

import styled from "styled-components";

import { connect } from "react-redux";
import {
  getDistricsAsyc,
  getThanaAsync,
} from "../../redux/locationReducer/location_actions";
import {
  getClassAsync,
  getSubjectsAsync,
} from "../../redux/classReducer/class_action";

const { Option } = Select;

function DashBoardRequest({
  getDistricsAsyc,
  getThanaAsync,
  districts,
  currentThana,
  classNames,
  getClassAsync,
  getSubjectsAsync,
  subjects,
  history,
}) {
  const [form] = Form.useForm();

  const handeleStudentNum = () => {
    let noOfStudents = [];
    for (let index = 1; index <= 10; index++) {
      noOfStudents.push(index);
    }
    return noOfStudents.map((num) => (
      <Option key={num} value={num}>
        {num}
      </Option>
    ));
  };

  const handleDaysPerWeek = () => {
    let daysPerWeek = [];
    for (let i = 1; i <= 7; i++) {
      daysPerWeek.push(`${i} Days/Week`);
    }
    return daysPerWeek.map((num) => (
      <Option key={num} value={num}>
        {num}
      </Option>
    ));
  };

  const onFinish = async (values) => {
    const token = window.localStorage.getItem("token");
    console.log(values);
    const date = moment(values.date).format("MMMM Do YYYY");
    const time = moment(values.time).format("hh:mm:ss a");
    try {
      await axios({
        url: "/jobs",
        method: "POST",
        data: {
          ...values,
          district: values.district[0],
          dateToStart: date,
          time: time,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      form.resetFields();
      history.push("/");
    } catch (error) {
      message.error(error);
    }
  };
  useEffect(() => {
    !districts.length && getDistricsAsyc();
  }, []);
  return (
    <>
      <TitleCover>
        <h2>Job Information</h2>
        <Divider />
      </TitleCover>
      <Card style={{ padding: 30, borderRadius: 10 }}>
        <Form
          layout="vertical"
          name="tutor_request"
          className="login-form"
          initialValues={{}}
          onFinish={onFinish}
          form={form}
        >
          <Row gutter={[30, 30]}>
            <Col md={12} sm={24} xs={24}>
              <Form.Item
                className="form_item_cover"
                name="district"
                rules={[
                  { required: true, message: "Please input your District!" },
                ]}
                label="District"
              >
                <Select
                  showSearch
                  className="select_inp_cover"
                  size="large"
                  placeholder="Select Your District"
                  onSelect={(value) => getThanaAsync(value[1])}
                >
                  {districts.map((doc, idx) => (
                    <Option key={idx} value={[doc.name, doc.id]}>
                      {doc.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                className="form_item_cover"
                name="area"
                label="Area"
                rules={[{ required: true, message: "Please input your Area!" }]}
              >
                <Select
                  showSearch
                  className="select_inp_cover"
                  size="large"
                  placeholder="Select Your Area"
                  notFoundContent="Select an District"
                >
                  {currentThana.map((doc, idx) => (
                    <Option key={idx} value={doc.name}>
                      {doc.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                className="form_item_cover"
                name="tutorType"
                label="Tutor Type"
                rules={[{ required: true, message: "Please input your Area!" }]}
              >
                <Select
                  className="select_inp_cover"
                  size="large"
                  placeholder="Select Your Tutor Type"
                >
                  <Option value="online-tutor">Online Tutor</Option>
                  <Option value="Home-tutor">Home Tutor</Option>
                </Select>
              </Form.Item>
              <Form.Item
                className="form_item_cover"
                name="medium"
                label="Medium"
                rules={[
                  { required: true, message: "Please input your Medium!" },
                ]}
              >
                <Select
                  className="select_inp_cover"
                  size="large"
                  placeholder="Select Medium"
                  onChange={(value) => {
                    getClassAsync(value);
                  }}
                >
                  <Option value="English_Medium">English Medium</Option>
                  <Option value="Bangla_Medium">Bangla Medium</Option>
                </Select>
              </Form.Item>
              <Form.Item
                className="form_item_cover"
                name="className"
                label="Class"
                rules={[
                  { required: true, message: "Please input your Class!" },
                ]}
              >
                <Select
                  className="select_inp_cover"
                  size="large"
                  placeholder="Select Class"
                  notFoundContent="Select A Medium First"
                  onChange={(value) => {
                    getSubjectsAsync(value);
                  }}
                >
                  {classNames?.classes.map((cls, idx) => {
                    const noUnder = cls.replace("_", " ");
                    return (
                      <Option key={idx} value={cls}>
                        {noUnder}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                className="form_item_cover"
                name="subjects"
                label="Subject"
                rules={[
                  { required: true, message: "Please input your Subject!" },
                ]}
              >
                <Select
                  className="select_inp_cover"
                  size="large"
                  mode="multiple"
                  placeholder="Select Subjects"
                  allowClear
                >
                  {subjects.map((sub, idx) => (
                    <Option key={idx} value={sub}>
                      {sub}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                className="form_item_cover"
                name="studentsGender"
                label="Students Gender"
                rules={[
                  { required: true, message: "Please input your Gender!" },
                ]}
              >
                <Radio.Group size="large">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                className="form_item_cover"
                name="teachersGender"
                label="Teacher Gender"
                rules={[
                  { required: true, message: "Please input your Gender!" },
                ]}
              >
                <Radio.Group size="large">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                  <Radio value="any">Any</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                className="form_item_cover"
                name="address"
                label="Address"
                rules={[
                  { required: true, message: "Please input your Address!" },
                ]}
              >
                <Input.TextArea placeholder="Add Address Description" />
              </Form.Item>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <Form.Item
                className="form_item_cover"
                name="instituteName"
                label="Institution Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Institution Name!",
                  },
                ]}
              >
                <Input size="large" placeholder="Add Students Institute Name" />
              </Form.Item>
              <Form.Item
                className="form_item_cover"
                name="numberOfStudents"
                label="No Of Students"
                rules={[
                  {
                    required: true,
                    message: "Please input your No of Students!",
                  },
                ]}
              >
                <Select
                  className="select_inp_cover"
                  size="large"
                  placeholder="No of Students"
                >
                  {handeleStudentNum()}
                </Select>
              </Form.Item>
              <Form.Item
                className="form_item_cover"
                name="daysPerWeek"
                label="Days Per Week"
                rules={[
                  { required: true, message: "Please input your DaysPerWeek!" },
                ]}
              >
                <Select
                  className="select_inp_cover"
                  size="large"
                  placeholder="Select Days per Week"
                >
                  {handleDaysPerWeek()}
                </Select>
              </Form.Item>
              <Form.Item
                className="form_item_cover"
                name="time"
                label="Time Picker"
                rules={[
                  {
                    required: true,
                    message: "Please input your No of Time Picker!",
                  },
                ]}
              >
                <TimePicker
                  size="large"
                  style={{ width: "100%" }}
                  use12Hours
                  format="h:mm a"
                />
              </Form.Item>

              <Form.Item
                className="form_item_cover"
                name="dateToStart"
                label="Hiring Data"
                rules={[
                  {
                    required: true,
                    message: "Please input your Date!",
                  },
                ]}
              >
                <DatePicker size="large" style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                className="form_item_cover"
                name="salary"
                label="Salary"
                rules={[
                  {
                    required: true,
                    message: "Please input your No of Time Picker!",
                  },
                ]}
              >
                <Input type="number" size="large" placeholder="Salary in BDT" />
              </Form.Item>
              <Form.Item
                className="form_item_cover"
                name="additionalAddressDescription"
                label="Additional Description"
                rules={[
                  {
                    required: true,
                    message: "Please input your No of Additional Description!",
                  },
                ]}
              >
                <Input.TextArea placeholder="Add Additional Requirements" />
              </Form.Item>
              <Form.Item className="form_item_cover">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Add Tutor
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </>
  );
}

const mapStateToProps = ({
  location: { districts, currentThana },
  classArr: { classNames, subjects },
}) => ({
  districts,
  currentThana,
  classNames,
  subjects,
});

const mapDispatchToProps = (dispatch) => ({
  getDistricsAsyc: () => dispatch(getDistricsAsyc()),
  getThanaAsync: (id) => dispatch(getThanaAsync(id)),
  getClassAsync: (medium) => dispatch(getClassAsync(medium)),
  getSubjectsAsync: (className) => dispatch(getSubjectsAsync(className)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardRequest);

const TitleCover = styled(Card)`
  border-radius: 15px;
  margin: 15px 0;
  h2 {
    text-align: center;
  }
`;

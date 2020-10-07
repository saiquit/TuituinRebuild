import React, { useEffect } from "react";
import { Form, Row, Col, Select, Button } from "antd";
import { connect } from "react-redux";
import axios from "axios";

import {
  getDistricsAsyc,
  getThanaAsync,
} from "../redux/locationReducer/location_actions";
import {
  getClassAsync,
  getSubjectsAsync,
} from "../redux/classReducer/class_action";

const allSubjects = [
  "All",
  "English",
  "Bangla",
  "General Math",
  "General Science",
  "Religious Studies",
  "General Knowledge",
  "Commercial Geography",
  "History",
  "Art and Craft",
  "Agricultural Education",
  "ICT",
  "Bangladesh & Global Studies",
  "Home Economics",
  "Social Science",
  "Biology",
  "Civics",
  "Psychology",
  "Management",
  "Economics",
  "Accounting",
  "Higher Math",
  "Chemistry",
  "Physics",
];

const { Option } = Select;
function TutorEditTab1({
  getDistricsAsyc,
  getThanaAsync,
  districts,
  currentThana,
  classNames,
  getClassAsync,
  getSubjectsAsync,
  subjects,
  history,
  user,
  _id,
}) {
  const [form] = Form.useForm();
  useEffect(() => {
    !districts.length && getDistricsAsyc();
    //eslint-disable-next-line
  }, []);
  const onFinish = async (values) => {
    const token = window.localStorage.getItem("token");
    axios({
      url: `/users/${_id}`,
      method: "PUT",
      data: {
        availability: {
          ...values,
          district: values.district[0],
        },
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <div>
      <Form
        name="tutor_request"
        className="login-form"
        initialValues={{ ...user?.availability }}
        onFinish={onFinish}
        form={form}
        layout="vertical"
      >
        <Row gutter={[30, 30]}>
          <Col span={12}>
            <Form.Item
              className="form_item_cover"
              name="tutorType"
              label="Tutor Type"
            >
              <Select
                mode="multiple"
                className="select_inp_cover"
                size="large"
                placeholder="Select Your Tutor Type"
              >
                <Option value="Online Tutor">Online Tutor</Option>
                <Option value="Home Tutor">Home Tutor</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Medium" className="form_item_cover" name="medium">
              <Select
                className="select_inp_cover"
                size="large"
                placeholder="Select Medium"
                onChange={(value) => getClassAsync(value)}
              >
                <Option value="English_Medium">English Medium</Option>
                <Option value="Bangla_Medium">Bangla Medium</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Class"
              className="form_item_cover"
              mode="multiple"
              name="class"
            >
              <Select
                className="select_inp_cover"
                mode="multiple"
                size="large"
                placeholder="Select Class"
                notFoundContent="Select A Medium First"
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
              label="Place of Tutoring"
              className="form_item_cover"
              name="place"
            >
              <Select
                className="select_inp_cover"
                size="large"
                placeholder="Select Medium"
                mode="multiple"
              >
                <Option value="Online">Online</Option>
                <Option value="My Home">My Home</Option>
                <Option value="Student Home">Student Home</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Subjects"
              className="form_item_cover"
              name="subjects"
            >
              <Select
                className="select_inp_cover"
                mode="multiple"
                size="large"
                placeholder="Select Subjects"
                allowClear
              >
                {allSubjects.map((sub, i) => (
                  <Option key={i} value={sub}>
                    {sub}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="District"
              className="form_item_cover"
              name="district"
            >
              <Select
                className="select_inp_cover"
                size="large"
                placeholder="Select Your District"
                showSearch
                onSelect={(value) => getThanaAsync(value[1])}
              >
                {districts.map((doc, idx) => (
                  <Option key={idx} value={[doc.name, doc.id]}>
                    {doc.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item className="form_item_cover" name="area" label="Area">
              <Select
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
            <Form.Item className="form_item_cover">
              <Button
                htmlType="submit"
                size="large"
                style={{ display: "block", float: "right" }}
                type="primary"
              >
                Submit
              </Button>
            </Form.Item>
            <Button
              size="large"
              style={{ display: "block", float: "right" }}
              //   onClick={() => changeTab(2)}
              type="default"
            >
              Skip
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
const mapStateToProps = ({
  location: { districts, currentThana },
  classArr: { classNames, subjects },
  user: { user, _id },
}) => ({
  districts,
  currentThana,
  classNames,
  subjects,
  user,
  _id: user._id,
});

const mapDispatchToProps = (dispatch) => ({
  getDistricsAsyc: () => dispatch(getDistricsAsyc()),
  getThanaAsync: (id) => dispatch(getThanaAsync(id)),
  getClassAsync: (medium) => dispatch(getClassAsync(medium)),
  getSubjectsAsync: (className) => dispatch(getSubjectsAsync(className)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TutorEditTab1);

import React, { useEffect } from "react";
import { Form, Select, Button, Card } from "antd";

import {
  getDistricsAsyc,
  getThanaAsync,
} from "../redux/locationReducer/location_actions";
import {
  getClassAsync,
  getSubjectsAsync,
} from "../redux/classReducer/class_action";
import { jobFetchingAndFiltering } from "../redux/jobReducer/job_actions";

import { connect } from "react-redux";
import styled from "styled-components";

const { Option } = Select;

function JobPageSideBar({
  districts,
  currentThana,
  classNames,
  subjects,
  getDistricsAsyc,
  getThanaAsync,
  getClassAsync,
  getSubjectsAsync,
  jobFetchingAndFiltering,
  state,
  totalJobs,
  isDash,
  setVisible,
}) {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    jobFetchingAndFiltering(values);
    isDash && setVisible(false);
  };

  useEffect(() => {
    getDistricsAsyc();
    return () => form.resetFields();
  }, []);

  const handleReset = () => {
    return form.resetFields();
  };

  return (
    <SidebarCover>
      <Form
        layout="vertical"
        name="tutor_request"
        className="sidebar_filter"
        initialValues={state}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          className="form_item_cover"
          name="district"
          //   rules={[{ required: true, message: "Please input your District!" }]}
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
          //   rules={[{ required: true, message: "Please input your Area!" }]}
          label="Area"
        >
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
        <Form.Item
          className="form_item_cover"
          name="tutorType"
          //   rules={[{ required: true, message: "Please input your Area!" }]}
          label="Tutor Type"
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
          //   rules={[{ required: true, message: "Please input your Medium!" }]}
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
          //   rules={[{ required: true, message: "Please input your Class!" }]}
          label="Class"
        >
          <Select
            className="select_inp_cover"
            size="large"
            placeholder="Select Class"
            notFoundContent="Select A Medium First"
            // onChange={(value) => {
            //   getSubjectsAsync(value);
            // }}
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

        {/* <Form.Item
          className="form_item_cover"
          name="subjects"
          //   rules={[{ required: true, message: "Please input your Subject!" }]}s
          label="Subject"
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
        </Form.Item> */}
        <Form.Item className="form_item_cover">
          <Button
            type="primary"
            htmlType="submit"
            className="filter-form-button"
          >
            Filter
          </Button>
        </Form.Item>

        <Button type="primary" onClick={handleReset}>
          Reset
        </Button>
      </Form>
    </SidebarCover>
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
  jobFetchingAndFiltering: (values) =>
    dispatch(jobFetchingAndFiltering(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobPageSideBar);

const SidebarCover = styled(Card)`
  height: 100vh;
  padding: 10px;
  background-color: transparent;
  border: none;
  div {
    height: 100%;
    position: relative;
  }
`;

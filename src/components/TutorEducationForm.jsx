import React, { useEffect } from "react";
import { Row, Col, Select, Form, Input, Button } from "antd";
import { connect } from "react-redux";
import axios from "axios";
import {
  getGroupsAsync,
  getInstituteNameAsync,
} from "../redux/classReducer/class_action";
import { updateEduInfo } from "../redux/userReducer/user_actions";
const { Option } = Select;

function TutorEducationForm({
  getGroupsAsync,
  getInstituteNameAsync,
  groups,
  instituteName,
  hidden,
  educationInfo,
  updateEduInfo,
  setHidden,
  _id,
}) {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const data = [...educationInfo, values];
    const token = window.localStorage.getItem("token");
    updateEduInfo(data);
    setHidden(true);
    axios({
      url: `/users/${_id}`,
      method: "PUT",
      data: {
        educationInfo: data,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  useEffect(() => {
    getGroupsAsync();
    getInstituteNameAsync();
    //eslint-disable-next-line
  }, []);
  return (
    <Form
      hidden={hidden}
      name="tuition_edu"
      className="login-form"
      onFinish={onFinish}
      form={form}
      layout="vertical"
    >
      <Row gutter={[30, 30]}>
        <Col span={12}>
          <Form.Item
            className="form_item_cover"
            name="studyLabel"
            label="Add Masters, Honors, HSC/A Level, SSC/O Level"
          >
            <Select
              className="select_inp_cover"
              size="large"
              placeholder="Add Masters, Honors, HSC/A Level, SSC/O Level"
            >
              <Option value="Secondary">Secondary</Option>
              <Option value="Higher Secondary">Higher Secondary</Option>
              <Option value="Honors/Bachelor">Honors/Bachelor</Option>
              <Option value="Masters">Masters</Option>
            </Select>
          </Form.Item>
          <Form.Item
            className="form_item_cover"
            name="degreeTitle"
            label="Exam / Degree Title "
          >
            <Input size="large" placeholder="Eg:SSC" />
          </Form.Item>
          <Form.Item
            className="form_item_cover"
            name="group"
            label="Concentration / Major / Group *"
          >
            <Select
              className="select_inp_cover"
              size="large"
              placeholder="Select..."
              showSearch
            >
              {groups.map((data) => (
                <Option value={data.group_name} key={data._id}>
                  {data.group_name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            className="form_item_cover"
            name="instituteName"
            label="Institute Name"
          >
            <Select
              className="select_inp_cover"
              size="large"
              placeholder="Select..."
              showSearch
            >
              {instituteName.map((data) => (
                <Option value={data.institute_name} key={data._id}>
                  {data.institute_name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className="form_item_cover"
            name="curriculum"
            label="Curriculum"
          >
            <Select
              className="select_inp_cover"
              size="large"
              placeholder="Curriculum"
            >
              <Option value="Bangla Version">Bangla Version</Option>
              <Option value="English Version">English Version</Option>
            </Select>
          </Form.Item>
          <Form.Item
            className="form_item_cover"
            name="idCard"
            label="ID Card No (Optional)"
          >
            <Input placeholder="124558" type="number" size="large" />
          </Form.Item>
          <Form.Item
            className="form_item_cover"
            name="yearOfPassing"
            label="Year Of Passing or estimated"
          >
            <Input placeholder="Date" type="Number" size="large" />
          </Form.Item>
          <Form.Item className="form_item_cover">
            <Button size="large" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
const mapStateToProps = ({
  classArr: { groups, instituteName },
  user: { user },
}) => ({
  groups,
  instituteName,
  educationInfo: user.educationInfo,
  _id: user._id,
});
const mapDispatchToProps = (dispatch) => ({
  getGroupsAsync: () => dispatch(getGroupsAsync()),
  getInstituteNameAsync: () => dispatch(getInstituteNameAsync()),
  updateEduInfo: (data) => dispatch(updateEduInfo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TutorEducationForm);

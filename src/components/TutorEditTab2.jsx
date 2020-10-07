import React from "react";
import { Form, Row, Col, Select, Button, Input, Radio, DatePicker } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";

const { Option } = Select;
function TutorEditTab2() {
  const [form] = Form.useForm();
  const { personalInfo, _id } = useSelector(({ user }) => user.user);

  const onFinish = async (values) => {
    const token = window.localStorage.getItem("token");
    axios({
      url: `/users/${_id}`,
      method: "PUT",
      data: {
        personalInfo: {
          ...values,
          birthDate: moment(values.birthDate).format("YYYY/MM/DD"),
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
        name="tutor_personal"
        className="login-form"
        initialValues={{
          ...personalInfo,
          birthDate: moment(personalInfo.birthDate),
        }}
        onFinish={onFinish}
        form={form}
        layout="vertical"
      >
        <Row gutter={[30, 30]}>
          <Col span={12}>
            <Form.Item
              className="form_item_cover"
              name="teachersGender"
              label="Gender"
            >
              <Radio.Group size="large">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item className="form_item_cover" label="Detail Address">
              <Form.Item noStyle name="detailsAddress">
                <Input.TextArea
                  rows={5}
                  size="large"
                  placeholder="Add Detail Address"
                />
              </Form.Item>
            </Form.Item>
            <Form.Item
              className="form_item_cover"
              name="identityType"
              label="IdentityTypes"
            >
              <Select
                className="select_inp_cover"
                size="large"
                placeholder="Select Identity"
              >
                <Option value="National Id">National Id</Option>
                <Option value="Birth Certificate No">
                  Birth Certificate No
                </Option>
                <Option value="Passport">Passport</Option>
              </Select>
            </Form.Item>
            <Form.Item className="form_item_cover" label="Identity Number">
              <Form.Item noStyle name="identityNumber">
                <Input
                  type="number"
                  size="large"
                  placeholder="Add Your Identity Number"
                />
              </Form.Item>
            </Form.Item>
            <Form.Item
              className="form_item_cover"
              label="BirthDate"
              name="birthDate"
            >
              <DatePicker size="large" style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              className="form_item_cover"
              name="religion"
              label="Religion"
            >
              <Select
                className="select_inp_cover"
                size="large"
                placeholder="Select Religion"
              >
                <Option value="Islam">Islam</Option>
                <Option value="Hinduism">Hinduism</Option>
                <Option value="Christian">Christian</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item className="form_item_cover" label="Father's Name">
              <Form.Item name="fatherName" noStyle>
                <Input size="large" placeholder="Fathers Name" />
              </Form.Item>
            </Form.Item>
            <Form.Item className="form_item_cover" label="Father Phone Number">
              <Form.Item name="fatherPhoneNumber" noStyle>
                <Input
                  type="tel"
                  size="large"
                  placeholder="Add Your Father Number"
                />
              </Form.Item>
              <Form.Item className="form_item_cover" label="OverView">
                <Form.Item name="overView" noStyle>
                  <Input.TextArea
                    rows={5}
                    size="large"
                    placeholder="Add OverView..."
                  />
                </Form.Item>
              </Form.Item>
            </Form.Item>
            <h2>Emergency Info</h2>
            <Form.Item className="form_item_cover" label="Name">
              <Form.Item name="emergencyName" noStyle>
                <Input size="large" placeholder="Emergency Contact Name" />
              </Form.Item>
            </Form.Item>
            <Form.Item className="form_item_cover" label="Number">
              <Form.Item name="emergencyPhoneNumber" noStyle>
                <Input
                  type="tel"
                  size="large"
                  placeholder="Add Your Emergency Number"
                />
              </Form.Item>
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
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default TutorEditTab2;

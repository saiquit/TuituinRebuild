import React from "react";
import { Form, Input, Tooltip } from "antd";
import { UserOutlined, QuestionCircleOutlined } from "@ant-design/icons";

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      layout="vertical"
      name="normal_registration"
      className="registration-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="Please input your E-mail!" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Please input your password!" />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!",
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Please confirm your password!" />
      </Form.Item>

      <Form.Item
        name="nickname"
        label={
          <span>
            Nickname&nbsp;
            <Tooltip title="What do you want others to call you?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Please input your nickname!" />
      </Form.Item>

      <Form.Item
        name="phone"
        label={
          <span>
            Phone&nbsp;
            <Tooltip title="Where Should Send Verification Code?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: "Please input your phone!",
            whitespace: true,
          },
        ]}
      >
        <Input type="tel" placeholder="Please input your Phone!" />
      </Form.Item>
    </Form>
  );
};

export default LoginPage;

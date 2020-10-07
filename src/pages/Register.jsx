import React, { useState } from "react";
import { Button, Col, Form, Input, Radio, Row, Tooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { userLoginSuccess } from "../redux/userReducer/user_actions";

const RegisterPage = ({ userLoginSuccess, history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const data = await (await axios.post("/users", values)).data;
      userLoginSuccess(data);
      history.push("/");
      setIsLoading(false);
    } catch (error) {}
  };

  return (
    <Cover>
      <Row
        style={{
          width: 1080,
          padding: "50px 30px",
          background: "#001529",
          borderRadius: 10,
        }}
      >
        <Col span={12}>
          <h1>Log in </h1>
        </Col>
        <Col span={12}>
          <Form
            layout="vertical"
            name="normal_registration"
            className="registration-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <CustomItem
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
              <Input
                placeholder="Please input your E-mail!"
                style={{ width: 500 }}
              />
            </CustomItem>

            <CustomItem
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
              <Input.Password
                style={{ width: 500 }}
                placeholder="Please input your password!"
              />
            </CustomItem>

            <CustomItem
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
              <Input.Password
                style={{ width: 500 }}
                placeholder="Please confirm your password!"
              />
            </CustomItem>

            <CustomItem
              name="name"
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
                  message: "Please input your name!",
                  whitespace: true,
                },
              ]}
            >
              <Input
                style={{ width: 500 }}
                placeholder="Please input your name!"
              />
            </CustomItem>

            <CustomItem
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
              <Input
                style={{ width: 500 }}
                type="tel"
                placeholder="Please input your Phone!"
              />
            </CustomItem>
            <RadioButton label="Sign-up as" name="role" required>
              <Radio.Group>
                <Radio value="tutor">Tutor</Radio>
                <Radio value="guardian">Guardian</Radio>
              </Radio.Group>
            </RadioButton>
            <CustomItem>
              <Button
                loading={isLoading}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Registration
              </Button>
            </CustomItem>
          </Form>
        </Col>
      </Row>
    </Cover>
  );
};

const mapDispatchToProps = (dispatch) => ({
  userLoginSuccess: (user) => dispatch(userLoginSuccess(user)),
});
export default connect(null, mapDispatchToProps)(RegisterPage);

const CustomItem = styled(Form.Item)`
  .ant-input-affix-wrapper {
    border: none;
    border-radius: 30px;
    padding: 15px;
  }
  input {
    border: none;
    border-radius: 30px;
    padding: 15px;
  }
  div {
    label {
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background: url("/assets/bg.jpg"); */
  background-size: cover;
`;
const RadioButton = styled(Form.Item)`
  label {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
`;

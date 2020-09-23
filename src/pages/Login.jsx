import React from "react";
import { Form, Input, Button, Space, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { fetchUserAsync } from "../redux/userReducer/user_actions";

const LoginPage = ({ history, fetchUserAsync }) => {
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      const data = await axios.post("/auth", values);
      await fetchUserAsync(data?.data?.token);
      await window.localStorage.setItem("token", data.data.token);
      history.push("/");
    } catch (error) {
      // alert(error);
      message.error(error, 1);
    }
  };

  return (
    <Cover>
      <Form
        name="normal_login"
        style={{ placeContent: "center" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <CustomItem
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
              type: "email",
            },
          ]}
        >
          <Input
            style={{ width: 500 }}
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email Address"
          />
        </CustomItem>
        <CustomItem
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </CustomItem>
        <Form.Item>
          <Space size="middle">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or
            <Button type="default">
              <Link to="/register">Register</Link>
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Cover>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchUserAsync: (token) => dispatch(fetchUserAsync(token)),
});

export default connect(null, mapDispatchToProps)(LoginPage);

const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("/assets/bg.jpg");
`;

const CustomItem = styled(Form.Item)`
  span {
    border: none;
  }
`;

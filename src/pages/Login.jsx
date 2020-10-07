import React, { useEffect, useState } from "react";
import { Form, Input, Space, message, Col, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { fetchUserAsync } from "../redux/userReducer/user_actions";
import CustomButton from "../components/CustomButton";

const LoginPage = ({ history, fetchUserAsync }) => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      setIsLoading(true);
      const data = await axios.post("/auth", values);
      await fetchUserAsync(data?.data?.token);
      await window.localStorage.setItem("token", data.data.token);
      setIsLoading(false);

      history.push("/");
    } catch (error) {
      setIsLoading(false);

      // alert(error);
      message.error(error.message, 1);
    }
  };
  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <Cover>
      <Row
        style={{
          width: 1080,
          padding: "50px 50px",
          background: "#001529",
          borderRadius: 10,
        }}
      >
        <Col span={12}>
          <h1>Log in </h1>
        </Col>
        <Col span={12}>
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
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email Address"
              />
            </CustomItem>
            <CustomItem
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
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
                <CustomButton
                  style={{ color: "white" }}
                  loading={isLoading}
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </CustomButton>
                Or
                <CustomButton color="black">
                  <Link to="/register">Register</Link>
                </CustomButton>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
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
  /* background: url("/assets/bg.jpg"); */
  background-size: cover;
`;

const CustomItem = styled(Form.Item)`
  span {
    border: none;
    border-radius: 30px;
    padding: 7px;
  }
`;

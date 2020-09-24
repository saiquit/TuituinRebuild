import React from "react";
import { Layout, Menu } from "antd";
import { normalRoute } from "../../routes";
import { Redirect, Route, NavLink } from "react-router-dom";
import styled from "styled-components";

const { Header, Content, Footer } = Layout;

function SecondLayout() {
  return (
    <Layout className="layout">
      <HeaderStyle>
        <div className="logo">
          <h2>LOGO</h2>
        </div>
        <Menu theme="dark" mode="horizontal" defaultActiveFirst>
          <Menu.Item key="1">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/login">Log in</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/register">Register</NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/jobs">Jobs</NavLink>
          </Menu.Item>
        </Menu>
      </HeaderStyle>
      <Content>
        <div className="site-layout-content">
          {normalRoute.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              )
            );
          })}
          {/* <Redirect from="/dashboard" to="/" exact /> */}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default SecondLayout;

const HeaderStyle = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

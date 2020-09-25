import React from "react";
import { Menu, Layout } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const { Header } = Layout;

function NormalHeader() {
  return (
    <HeaderStyle>
      <div className="logo">
        <h2>LOGO</h2>
      </div>
      <Menu theme="dark" mode="horizontal" defaultActiveFirst>
        <Menu.Item key="1">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/jobs">Jobs</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/login">Log in</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/register">Register</NavLink>
        </Menu.Item>
      </Menu>
    </HeaderStyle>
  );
}

export default NormalHeader;

const HeaderStyle = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

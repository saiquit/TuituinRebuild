import React from "react";

import { Link } from "react-router-dom";
import { tutorNav, guardianNav } from "../_nav";

import { Layout, Menu, Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Sider } = Layout;

const renderNav = (navName) => {
  return navName.map(({ icon, key, name, to }) => (
    <Menu.Item key={key} icon={icon}>
      <Link to={to}>{name}</Link>
    </Menu.Item>
  ));
};

function SideBar({ collapsed, onCollapse, user }) {
  return (
    <Sider
      theme="dark"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <AvaterCard>
        <Avatar size="large" icon={<UserOutlined />} />
        {/* <h2>{user.name}</h2> */}
      </AvaterCard>

      <Menu theme="dark" mode="inline">
        {user.role === "tutor" ? renderNav(tutorNav) : renderNav(guardianNav)}
      </Menu>
    </Sider>
  );
}

export default SideBar;

const AvaterCard = styled(Card)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #001529;
  border: none;
`;

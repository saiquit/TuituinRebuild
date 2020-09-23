import React from "react";

import { Link } from "react-router-dom";
import { tutorNav, guardianNav } from "../_nav";

import { Layout, Menu, Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

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
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Card
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar size="large" icon={<UserOutlined />} />
        {/* <h2>{user.name}</h2> */}
      </Card>

      <Menu theme="light" mode="inline">
        {user.role === "tutor" ? renderNav(tutorNav) : renderNav(guardianNav)}
      </Menu>
    </Sider>
  );
}

export default SideBar;

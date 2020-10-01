import React from "react";
import { Col, Layout, Row } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { withRouter } from "react-router-dom";

const { Header } = Layout;

function MainHeader({ history }) {
  const logOut = () => {
    window.localStorage.removeItem("token");
    window.location.reload(false);
  };
  return (
    <Header className="site-layout-background" style={{ padding: "0px 25px" }}>
      <Row>
        <Col span={12}></Col>
        <Col style={{ textAlign: "right" }} span={12}>
          <div onClick={logOut}>
            <Avatar size={30} style={{ cursor: "pointer" }} />
          </div>
        </Col>
      </Row>
    </Header>
  );
}

export default withRouter(MainHeader);

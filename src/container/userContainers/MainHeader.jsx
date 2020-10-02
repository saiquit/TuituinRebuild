import React, { useState } from "react";
import { Col, Layout, Row } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { withRouter } from "react-router-dom";

import MainHeaderDropDown from "../../components/HeaderDropdown";
const { Header } = Layout;

function MainHeader({ history }) {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible((prev) => !prev);
  };
  return (
    <Header className="site-layout-background" style={{ padding: "0px 25px" }}>
      <Row>
        <Col span={12}></Col>
        <Col style={{ textAlign: "right" }} span={12}>
          <div>
            <div onClick={handleVisible}>
              <Avatar size={30} style={{ cursor: "pointer" }}>
                A
              </Avatar>
            </div>
          </div>
        </Col>
      </Row>
      {visible && (
        <MainHeaderDropDown setVisible={setVisible} visible={visible} />
      )}
    </Header>
  );
}

export default withRouter(MainHeader);

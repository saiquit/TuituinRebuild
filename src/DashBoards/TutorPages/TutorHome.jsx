import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import { FormOutlined } from "@ant-design/icons";
import CardCover from "../../components/CardCover";

const { Meta } = Card;
function TotorHome() {
  return (
    <Row style={{ margin: 15 }} gutter={[16, 16]}>
      <Col md={16} sm={24} xs={24}>
        <CardCover>
          <Meta
            title="Notice Board"
            description="We published a new interface of the DESKTOP VERSION for the betterment of users. In addition, we've added new projects for tuitions. Now everyone will be able to select tutor/tutions not only for HOME but also for 'ONLINE, GROUP & PACKAGE'."
          />
        </CardCover>
      </Col>
      <Col md={8} sm={24} xs={24}>
        <CardCover>
          <Statistic
            title="Member Since"
            value="20 Nov"
            prefix={<FormOutlined />}
          />
        </CardCover>
      </Col>
    </Row>
  );
}

export default TotorHome;

import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { Col, Row, Space } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CardCover from "../../components/CardCover";

function TutorProfile() {
  const { user } = useSelector(({ user }) => user);
  return (
    <>
      <Row gutter={[15, 15]}>
        <Col span={18}>
          <CardCover>
            <h2>Edit</h2>
          </CardCover>
        </Col>
        <Col span={6}>
          <CardCover>
            <ProfileImageCover>
              <Avatar
                shape="circle"
                size="large"
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
              />
            </ProfileImageCover>
            <HeadingText>{user.name}</HeadingText>
            <ParagraphText>{user.email}</ParagraphText>
            <Space
              style={{ display: "flex", justifyContent: "center" }}
              size={15}
            >
              <FacebookFilled style={{ fontSize: 35 }} />
              <InstagramFilled style={{ fontSize: 35 }} />
            </Space>
          </CardCover>
        </Col>
      </Row>
    </>
  );
}

export default TutorProfile;
const ProfileImageCover = styled.div`
  width: 100%;
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    width: 100px;
    height: 100px;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

const HeadingText = styled.h2`
  font-size: 35px;
  text-align: center;
  line-height: 25px;
  text-transform: capitalize;
`;
const ParagraphText = styled.p`
  font-size: 20px;
  text-align: center;
`;

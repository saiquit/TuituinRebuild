import { EditFilled, FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { Button, Col, Row, Space } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CardCover from "../../components/CardCover";
import SingleEducation from "../../components/SingleEducation";
import SingleProfileView from "../../components/SingleProfileView";

function TutorProfile() {
  const { user } = useSelector(({ user }) => user);

  return (
    <>
      <Row gutter={[15, 15]}>
        <Col span={18}>
          <CardCover>
            <SingleProfileView
              name="Tuition Related Information"
              value={user.availability}
            />
          </CardCover>
          <CardCover>
            <SingleProfileView name="Personal Info" value={user.personalInfo} />
          </CardCover>
          <CardCover>
            <SectionName>Education Details</SectionName>
            {user?.educationInfo.map((edu, i) => (
              <SingleEducation proPage={true} edu={edu} key={i} />
            ))}
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
            <HeadingText>
              {user.name}
              <Link to="/dashboard/edit">
                <Button style={{ marginLeft: 20 }} icon={<EditFilled />}>
                  Edit
                </Button>
              </Link>
            </HeadingText>
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
const SectionName = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  color: #2b2b2c;
  position: relative;
  padding-left: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  &::after {
    position: absolute;
    content: "";
    width: 3px;
    background: orangered;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

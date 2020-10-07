import { Button, Row, Space } from "antd";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CardCover from "./CardCover";
import TutorEducationForm from "./TutorEducationForm";
import SingleEducation from "./SingleEducation";

function TutorEditTab3() {
  const { educationInfo } = useSelector(({ user }) => user.user);
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <Row align="stretch">
        {educationInfo.map((edu, i) => (
          <SingleEducation edu={edu} key={i} />
        ))}
      </Row>
      <TutorEducationForm setHidden={setHidden} hidden={hidden} />
      <CardCover>
        <Space>
          <Button type="primary" onClick={() => setHidden(false)}>
            Add New
          </Button>
          <Button onClick={() => setHidden(true)}>Cancel</Button>
        </Space>
      </CardCover>
    </>
  );
}

export default TutorEditTab3;

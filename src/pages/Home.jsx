import React from "react";
import { Col, Image, Row } from "antd";

import styled from "styled-components";

function Home({ history }) {
  return (
    <HeroCover>
      <Col md={14} sm={24} xs={24} style={{ padding: 100 }}>
        <HeroHeading>Find a tutor today!</HeroHeading>
        <HeroSubheading>
          Book one-on-one lessons with verified tutors in your area
        </HeroSubheading>
      </Col>
      <Col md={10} sm={24} xs={24}>
        <Image preview={false} width={"100%"} src={`assets/hero.jpg`} />
      </Col>
    </HeroCover>
  );
}

const HeroCover = styled(Row)`
  height: 80vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const HeroHeading = styled.h1`
  font-size: 60px;
  font-weight: 600;
`;
const HeroSubheading = styled.p`
  font-size: 20px;
`;

export default Home;

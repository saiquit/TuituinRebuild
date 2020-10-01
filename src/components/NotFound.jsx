import React from "react";
import { Image, Row } from "antd";
import styled from "styled-components";

function NotFound() {
  return (
    <Cover>
      <Image src={"/assets/not_found.png"} width={"60%"} />
      <h2>No Jobs Found</h2>
    </Cover>
  );
}

export default NotFound;
const Cover = styled(Row)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

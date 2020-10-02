import React from "react";
import { Result, Button, Row } from "antd";
import styled from "styled-components";

function NotFound() {
  return (
    <Cover>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
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

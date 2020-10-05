import React from "react";
import { Result, Button, Row } from "antd";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NotFound() {
  const user = useSelector(({ user }) => user.user);

  return (
    <Cover>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to={user ? "/dashboard" : "/"}>
            <Button type="primary">Back {user ? "DashBoard" : "Home"}</Button>
          </Link>
        }
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

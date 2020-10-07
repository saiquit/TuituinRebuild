import React from "react";
import { Button } from "antd";
import styled from "styled-components";
function CustomButton(props) {
  const { children } = props;
  return (
    <StyledButton size="large" {...props}>
      {children}
    </StyledButton>
  );
}

export default CustomButton;

const StyledButton = styled(Button)`
  color: white;
  background-color: ${(props) => props.color || "#ed3330"};
  height: 40px !important;
  width: 100px !important;
  border: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
    background: #434343;
    /* letter-spacing: 1px; */
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
    transform: scale(1.05);
  }
  &:focus {
    border: none;
    color: white;
    background: #434343;
  }
`;

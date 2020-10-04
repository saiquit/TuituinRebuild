import { Modal } from "antd";
import React from "react";
import styled from "styled-components";

function HeaderDropdown({ visible, setVisible }) {
  const logOut = () => {
    window.localStorage.removeItem("token");
    window.location.reload(false);
  };
  return (
    <CustomModal
      onCancel={() => setVisible(false)}
      visible={visible}
      maskStyle={{ background: "transparent" }}
      footer={null}
      width="250px"
      style={{ position: "absolute", right: "25px", borderRadius: "15px" }}
    >
      <Lists>
        <li onClick={logOut}>Log Out</li>
      </Lists>
    </CustomModal>
  );
}

export default HeaderDropdown;
const Lists = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  border-radius: 15px;
  border: none;
  li {
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      color: orangered;
    }
  }
`;
const CustomModal = styled(Modal)`
  background-color: transparent;

  .ant-modal-body {
    border-radius: 15px !important;
  }
`;

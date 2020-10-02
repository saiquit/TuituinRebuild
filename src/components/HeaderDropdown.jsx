import { Modal } from "antd";
import React from "react";
import styled from "styled-components";

function HeaderDropdown({ visible, setVisible }) {
  const logOut = () => {
    window.localStorage.removeItem("token");
    window.location.reload(false);
  };
  return (
    <Modal
      onCancel={() => setVisible(false)}
      visible={visible}
      maskStyle={{ background: "transparent" }}
      footer={null}
      width="250px"
      style={{ position: "absolute", right: "25px" }}
    >
      <Lists>
        <li onClick={logOut}>Log Out</li>
      </Lists>
    </Modal>
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

import React, { useState } from "react";
import { Drawer } from "antd";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import JobPageSideBar from "./JobPageSideBar";
function JobSidebarButton() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <FilterButton onClick={showDrawer} />

      <Drawer
        width={500}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <JobPageSideBar setVisible={setVisible} isDash={true} />
      </Drawer>
    </>
  );
}

export default JobSidebarButton;

const FilterButton = styled(SearchOutlined)`
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: orange;
  margin: 25px;
  padding: 25px;
  font-size: 25px;
  border-radius: 50px;
  color: white;
`;

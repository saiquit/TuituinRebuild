import React from "react";
import { Tabs } from "antd";
import CardCover from "../../components/CardCover";
import TutorEditTab1 from "../../components/TutorEditTab1";

const { TabPane } = Tabs;
function TutorEdit() {
  function callback(key) {
    console.log(key);
  }
  return (
    <CardCover>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Availability" key="1">
          <TutorEditTab1 />
        </TabPane>
        <TabPane tab="Experience Info" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Personal Info" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Emergency Info" key="4">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </CardCover>
  );
}

export default TutorEdit;

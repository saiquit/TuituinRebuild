import React from "react";
import { Tabs } from "antd";
import CardCover from "../../components/CardCover";

import TutorEditTab1 from "../../components/TutorEditTab1";
import TutorEditTab2 from "../../components/TutorEditTab2";

const { TabPane } = Tabs;
function TutorEdit() {
  function callback(key) {
    console.log(key);
  }
  return (
    <CardCover style={{ minHeight: "85vh" }}>
      <Tabs animated defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tuition Related Information" key="1">
          <TutorEditTab1 />
        </TabPane>
        <TabPane tab="Personal Info" key="2">
          <TutorEditTab2 />
        </TabPane>
        <TabPane tab="Education Info" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </CardCover>
  );
}

export default TutorEdit;

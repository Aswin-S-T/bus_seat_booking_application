import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import AddBus from "./AddBus";

function Dashboard() {
  return (
    <div>
      <Tabs className="vertical-tabs">
        <TabList className="vertical-tab-list">
          <Tab className="vertical-tab">
            <i className="fa fa-bus"></i> {" "}
            Add bus
          </Tab>
          <Tab className="vertical-tab">Tab 2</Tab>
          <Tab className="vertical-tab">Tab 3</Tab>
        </TabList>

        <TabPanel>
          <AddBus />
        </TabPanel>
        <TabPanel>
          <p>Content for Tab 2</p>
        </TabPanel>
        <TabPanel>
          <p>Content for Tab 3</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Dashboard;

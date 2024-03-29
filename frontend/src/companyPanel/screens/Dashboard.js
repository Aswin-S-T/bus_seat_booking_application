import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useNavigate } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import ListBus from "../../components/ListBus";
import AddBus from "./AddBus";
import DashboardHome from "./DashboardHome";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    checkUserDetails();
  }, []);

  const checkUserDetails = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  };

  return (
    <div>
      <Tabs className="vertical-tabs">
        <TabList className="vertical-tab-list">
          <Tab className="vertical-tab">
            <i className="fa fa-qrcode m-2"></i> Dashboard
          </Tab>
          {/* <Tab className="vertical-tab">
            <i className="fa fa-bus m-2"></i> Add bus
          </Tab> */}
          <Tab className="vertical-tab">
            <i className="fa fa-bus m-2"></i> Buses
          </Tab>
          <Tab className="vertical-tab">
            <i className="fa fa-bell m-2"></i> Notifications
          </Tab>
          <Tab className="vertical-tab">
            <i className="fa fa-comment m-2"></i> Feedbacks
          </Tab>
        </TabList>
        <TabPanel>
          <DashboardHome />
        </TabPanel>
        {/* <TabPanel>
          <AddBus />
        </TabPanel> */}
        <TabPanel>
          <ListBus />
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

import React from "react";
import Graph from "../components/graph.component";
import GraphComponent from "../components/graph.component";

function DashboardHome() {
  return (
    <div className="container-fluid">
      <div>
        <p className="DashboardHeading">Dashboard</p>
        <p className="DashboardSubHeading">Information about your current plan and usages</p>
      </div>
      <div className="commentGraphProject">
        <div className="row">
          <div className="col-md-5">
            <div className="DashboardCard p-2">
              <div className="dashboardBoxDesign">
                <div className="dashboardBox">
                  {/* <i className="fa fa-comment m-2 ml-50"></i> */}
                </div>
                <div className="TittleNumberBox">
                  <h5 className="dashboardBoxTittle">Earnings</h5>
                  <p className="dashboardBoxNumber">5</p>
                </div>
              </div>
              <div className="verticalLine"></div>
              <div className="dashboardBoxDesign">
                <div className="dashboardBox1">
                  {/* <i className="fa fa-comment m-2 ml-50"></i> */}
                </div>
                <div className="TittleNumberBox">
                  <h5 className="dashboardBoxTittle">Projects</h5>
                  <p className="dashboardBoxNumber">5</p>
                </div>
              </div>
              <div className="verticalLine"></div>
              <div className="dashboardBoxDesign">
                <div className="dashboardBox2">
                  {/* <i className="fa fa-comment m-2 ml-50"></i> */}
                </div>
                <div className="TittleNumberBox">
                  <h5 className="dashboardBoxTittle">Buses</h5>
                  <p className="dashboardBoxNumber">5</p>
                </div>
              </div>
            </div>
            {/* <Graph></Graph> */}
            <div className="DashboardCardGraph"></div>
          </div>
          
        </div>
        <div className="DashboardCardGraphComment2"></div>

      </div>
    </div>
  );
}

export default DashboardHome;

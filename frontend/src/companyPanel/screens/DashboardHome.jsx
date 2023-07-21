import React from "react";

function DashboardHome() {
  return (
    <div className="container-fluid">
      <div>
        <p className="DashboardHeading">Dashboard</p>
        <p className="DashboardSubHeading">Information about your current plan and usages</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card p-2">
            <div className="dashboardBoxDesign">
            <div className="dashboardBox">
            <i className="fa fa-comment m-2"></i> 
            </div>
            <div>
            <h5 className="dashboardBoxTittle">Total Earnings</h5>
            <p className="dashboardBoxNumber">5</p>
            </div>
            </div>
            <div>
              {/* <h5>Total Earnings</h5>
              <h1 className="text-center">1000</h1> */}
            </div>
            <div>
              {/* <h5>Total Earnings</h5>
              <h1 className="text-center">1000</h1> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;

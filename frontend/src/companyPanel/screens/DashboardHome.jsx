import React from "react";

function DashboardHome() {
  return (
    <div className="container-fluid mt-4">
      <h4>Dashboard</h4>
      <h6>Information about your bus details</h6>
      <div className="row mt-5">
        <div className="col-md-8">
          <div className="row shadow-bx">
            <div className="col-md-4">
              <div className=" p-2">
                <h6 className="dashboard-text">Total Bus</h6>
                <div className="same-row">
                  <i className="fa fa-bus m-2"></i>
                  <h2 className="text-center mt-2">5</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" p-2">
                <h6 className="dashboard-text">Total Users</h6>
                <div className="same-row">
                  <i className="fa fa-users m-2"></i>
                  <h2 className="text-center mt-2">5</h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" p-2">
                <h6 className="dashboard-text">Total Earnings</h6>
                <div className="same-row">
                  <i className="fa fa-money m-2"></i>
                  <h2 className="text-center mt-2">5</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">dsdsdsds</div>
      </div>
    </div>
  );
}

export default DashboardHome;

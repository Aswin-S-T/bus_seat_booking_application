import React from "react";

function DashboardHome() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="card p-2">
            <h5>Total Earnings</h5>
            <h1 className="text-center">1000</h1>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-2">
            <h5>Seat Booked </h5>
            <h1 className="text-center">10 / 52</h1>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default DashboardHome;

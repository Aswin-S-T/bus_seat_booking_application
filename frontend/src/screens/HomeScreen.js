import React from "react";
import DatatablePage from "../components/DatatablePage";
import SearchComponents from "../components/SearchComponents";
import Table from "../components/Table";

function HomeScreen() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img
              className="w-100 bannerImg"
              src="https://nectarbits.com/img/Latest/ShuttleService/shuttle_fleet.png"
            />
          </div>
          <div className="col-md-6 mt-5">
            <div className="container mt-5">
              <h2>City Bus is an official Bus booking Platform</h2>
              <SearchComponents />
            </div>
          </div>
        </div>
      </div>
      <section className="container bg-light">
        <div>
          <h4>KSRTC (Kerala) Bus Routes & Timings</h4>
          <div className="mt-5">
            <Table />
            <DatatablePage />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;

import React from "react";
import { BUS_IMAGE, NO_IMAGE } from "../constats/images";
import data from "../data/data";

function Table() {
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">SI</th>
            <th scope="col">Bus Name</th>
            <th scope="col">Route</th>
            <th scope="col">Time</th>
            <th scope="col">Book</th>
            {/* <th scope="col">Time</th> */}
          </tr>
        </thead>
        <tbody>
          {data.buses.map((bus, index) => (
            <>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  {bus.bus_name}
                  <img
                    src={bus.imageUrl ? bus.imageUrl : NO_IMAGE}
                    className="thumb"
                    style={{ marginLeft: "10px" }}
                  />
                </td>
                <td>
                  {bus.from} - {bus.to}
                </td>
                <td>{bus.time}</td>
                <td>
                  <a href={`/details/${bus._id}`}>
                    <button className="bookBtn">Book Now</button>
                  </a>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

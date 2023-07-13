import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BACKEND_URL } from "../../Api";
import data from "../../data/data";
import MultiSelect from "../components/MultiSelect";
import MyComponent from "../components/MyComponent";
import SelectBox from "../components/SelectBox";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AddBus() {
  const [loading, setLoading] = useState(false);
  const [busName, setBusName] = useState("");
  const [busNo, setBusNo] = useState("");
  const [busType, setBusType] = useState("normal");
  const [routes, setRoutes] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [destinationTime, setDestinationTime] = useState("");
  const [rate, setRate] = useState("");
  const [totalSeats, setTotalSeats] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);

  const [selectedRoutes, setSelectedRoutes] = useState([]);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSelect = (e) => {
    const selectedOption = e.target.value;
    setSelectedOptions((prevOptions) => [...prevOptions, selectedOption]);
  };

  const handleDelete = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((selectedOption) => selectedOption !== option)
    );
  };
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setCurrentUser(user);
    }

    const fetchRoutes = () => {
      const routesData = data.routes;
      let stopsArr = [];
      if (routesData.length > 0) {
        for (let i = 0; i < routesData.length; i++) {
          const elem = routesData[i];
          const stops = elem.stops;
          for (let i = 0; i < stops.length; i++) {
            stopsArr.push(stops[i]);
          }
        }
      }
      setRoutes(stopsArr);
    };
    fetchRoutes();
  }, []);

  const handleAddBusDetails = async (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("COMPANY ID************", user._id);
    e.preventDefault();
    let busData = {
      bus_name: busName,
      bus_no: busNo,
      bus_type: busType,
      start_time: startTime,
      end_time: destinationTime,
      routes: selectedOptions,
      from: selectedOptions[0],
      to: selectedOptions[selectedOptions.length - 1],
      imageUrl:
        "data:image/png;base64,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",
      totalSeats: totalSeats,
      rate: rate,
      company_id: user?._id,
    };
    let response = await axios.post(
      `${BACKEND_URL}/api/v1/user/add-bus-details`,
      busData
    );
    if (response && response.status == 200) {
      Swal.fire({
        title: "Success!",
        text: "Successfully Added",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        navigate("/company");
        window.location.reload();
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
        confirmButtonText: "Ok",
      }).then(() => {
        setLoading(false);
      });
    }
  };

  return (
    <div className="p-1">
      <div className="dashboard p-4">
        <h4 className="text-center">Add your Bus Details</h4>
        <form className="mt-4" onSubmit={handleAddBusDetails}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setBusName(e.target.value)}
                placeholder="Bus name"
              />
            </div>
            <div class="form-group col-md-6">
              <label>Bus No</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setBusNo(e.target.value)}
                placeholder="Bus number"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Bus Type</label>
              <select
                className="form-control"
                onChange={(e) => setBusType(e.target.value)}
              >
                <option value="normal">Normal</option>
                <option value="volvo">Volvo</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label>Select Routes</label>
              <select onChange={handleSelect} className="form-control">
                <option value="">Select routes</option>
                {routes &&
                  routes.length > 0 &&
                  routes.map((route) => <option value={route}>{route}</option>)}
              </select>
              <ul className="row mt-4">
                {selectedOptions.map((option, index) => (
                  <li key={index} className="route-list text-white p-1">
                    {option}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(option);
                      }}
                      className="m-1 text-white"
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Start Time</label>
              <input
                onChange={(e) => setStartTime(e.target.value)}
                type="time"
                className="m-1"
              />
            </div>
            <div class="form-group col-md-6">
              <label>Destination Time</label>
              <input
                onChange={(e) => setDestinationTime(e.target.value)}
                type="time"
                className="m-1"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Rate/Km</label>
              <input
                onChange={(e) => setRate(e.target.value)}
                type="number"
                class="form-control"
                placeholder="Rate/kilometer"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Total Seats</label>
              <input
                onChange={(e) => setTotalSeats(e.target.value)}
                type="number"
                className="form-control"
                placeholder="Total seats"
              />
            </div>
          </div>

          <button type="submit" class="submitBtn">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBus;

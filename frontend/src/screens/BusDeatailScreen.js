import React, { useEffect, useState } from "react";
import SeatLayout from "../components/SeatLayout";
import StripeCheckoutButton from "../components/StripeCheckoutButton";
import data from "../data/data";
import { useParams } from "react-router-dom";

function BusDeatailScreen() {
  const [busDetails, setBusDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await data.buses;
      let details = res.find((bus) => bus._id == id);
      if (details) {
        setBusDetails(details);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={busDetails?.imageUrl} className="w-100 mt-5" />
        </div>
        <div className="col-md-6">
          <div>
            <div className="row">
              <div className="col-md-6">
                <p>Full Name</p>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <p>Mobile Number / Email</p>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <p>Starting Point</p>
                <select className="form-control">
                  <option>sd</option>
                  <option>sd</option>
                  <option>sd</option>
                  <option>sd</option>
                  <option>sd</option>
                  <option>sd</option>
                </select>
              </div>
              <div className="col-md-6">
                <p>Destination Point</p>
                <select className="form-control">
                  <option>sd</option>
                  <option>sd</option>
                  <option>sd</option>
                  <option>sd</option>
                  <option>sd</option>
                  <option>sd</option>
                </select>
              </div>
              <div className="col-md-12">
                <p>Travelling Date</p>
                <input type="date" className="form-control" />
              </div>
            </div>
          </div>
          <SeatLayout />
          <div className="mt-3">
            <input type="checkbox" /> Continue with payment (Once you clicked
            this, you can't change the option)
          </div>
          <div>
            <StripeCheckoutButton price={232} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusDeatailScreen;

import React, { useEffect, useState } from "react";
import SeatLayout from "../components/SeatLayout";
import StripeCheckoutButton from "../components/StripeCheckoutButton";
import data from "../data/data";
import { useParams } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import ErrorBox from "../components/ErrorBox";
import axios from "axios";
import { BACKEND_URL } from "../constats/Api";
import InvoiceForm from "../InvoiceForm";

function BusDeatailScreen() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [bus, setBuses] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BACKEND_URL}/api/v1/user/bus/${id}`);
        if (res && res.status == 200) {
          setLoading(false);
          setBuses(res.data.data);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <ErrorBox />
      ) : (
        <div className="row">
          <div className="col-md-6 mt-5">
            <img src={bus?.imageUrl} className="w-100 mt-5" />
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
                    {bus && bus.routes && bus.routes.length > 0 ? (
                      bus.routes.map((route) => <option>{route}</option>)
                    ) : (
                      <h1>No starting point found</h1>
                    )}
                  </select>
                </div>
                <div className="col-md-6">
                  <p>Destination Point</p>
                  <select className="form-control">
                    {bus && bus.routes && bus.routes.length > 0 ? (
                      bus.routes.map((route) => <option>{route}</option>)
                    ) : (
                      <h1>No Destination point found</h1>
                    )}
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
            <div>{/* <StripeCheckoutButton price={232} /> */}</div>
            <InvoiceForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default BusDeatailScreen;

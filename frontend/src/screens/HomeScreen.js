import React from "react";

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
              <div className="box mt-5 bg-light p-4">
                <form>
                  <p>Start from</p>
                  <select className="form-control">
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                  </select>
                  <p>Going To</p>
                  <select className="form-control">
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                    <option>op1</option>
                  </select>
                  <p>Date</p>
                  <input type="date" className="form-control" />
                  <button type="submit" className="mt-3 searchBtn text-center">
                    Search Bus
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container bg-light">
        <div>
          <h4>KSRTC (Kerala) Bus Routes & Timings</h4>
          <div className="mt-5">
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
                <tr>
                  <th scope="row">1</th>
                  <td>KSRTC Super Fast</td>
                  <td>Kerala - Banglore</td>
                  <td>10 - 18</td>
                  <td>
                    <a href="/details">
                      <button className="bookBtn">Book Now</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>KSRTC Super Fast</td>
                  <td>Kerala - Banglore</td>
                  <td>10 - 18</td>
                  <td>
                    <a href="/details">
                      <button className="bookBtn">Book Now</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>KSRTC Super Fast</td>
                  <td>Kerala - Banglore</td>
                  <td>10 - 18</td>
                  <td>
                    <button className="bookBtn">Book Now</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>KSRTC Super Fast</td>
                  <td>Kerala - Banglore</td>
                  <td>10 - 18</td>
                  <td>
                    <a href="/details">
                      <button className="bookBtn">Book Now</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>KSRTC Super Fast</td>
                  <td>Kerala - Banglore</td>
                  <td>10 - 18</td>
                  <td>
                    <a href="/details">
                      <button className="bookBtn">Book Now</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>KSRTC Super Fast</td>
                  <td>Kerala - Banglore</td>
                  <td>10 - 18</td>
                  <td>
                    <a href="/details">
                      <button className="bookBtn">Book Now</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>KSRTC Super Fast</td>
                  <td>Kerala - Banglore</td>
                  <td>10 - 18</td>
                  <td>
                    <a href="/details">
                      <button className="bookBtn">Book Now</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>KSRTC Super Fast</td>
                  <td>Kerala - Banglore</td>
                  <td>10 - 18</td>
                  <td>
                    <a href="/details">
                      <button className="bookBtn">Book Now</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>KSRTC Super Fast</td>
                  <td>Kerala - Banglore</td>
                  <td>10 - 18</td>
                  <td>
                    <a href="/details">
                      <button className="bookBtn">Book Now</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>KSRTC Super Fast</td>
                  <td>Kerala - Banglore</td>
                  <td>10 - 18</td>
                  <td>
                    <a href="/details">
                      <button className="bookBtn">Book Now</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>KSRTC Super Fast</td>
                  <td>Kerala - Banglore</td>
                  <td>10 - 18</td>
                  <td>
                    <a href="/details">
                      <button className="bookBtn">Book Now</button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>KSRTC Super Fast</td>
                  <td>Kerala - Banglore</td>
                  <td>10 - 18</td>
                  <td>
                    <a href="/details">
                      <button className="bookBtn">Book Now</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;

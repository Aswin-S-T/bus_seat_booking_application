import React from "react";

function LoginScreen() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card mt-5">
            <div className="container-fluid">
              <h4 className="text-center">Login Here</h4>
              <form>
                <p>Email</p>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <p>Pasword</p>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
                <button className="submitBtn mt-2" type="submit">
                  Login
                </button>
                <div className="mt-4">
                  <a href="/signin" className="t-4">
                    Create new Account ?
                  </a>
                  <br />
                  <a href="" className="mt-2">
                    Forget password ?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default LoginScreen;

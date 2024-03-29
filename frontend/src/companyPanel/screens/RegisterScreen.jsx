import React from "react";

function RegisterScreen() {
  return (
    <div className="container=fluid">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card mt-5">
            <form className="p-4">
              <h4 className="text-center">Create new Account</h4>
              <div class="form-row mt-2">
                <div class="col-md-6 mb-3">
                  <label for="validationServer01">First name</label>
                  <input
                    type="text"
                    class="form-control is-valid"
                    id="validationServer01"
                    required
                  />
                  {/* <div class="valid-feedback">Looks good!</div> */}
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationServer02">Last name</label>
                  <input
                    type="text"
                    class="form-control is-valid"
                    id="validationServer02"
                    required
                  />
                  {/* <div class="valid-feedback">Looks good!</div> */}
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationServer03">City</label>
                  <input
                    type="text"
                    class="form-control is-invalid"
                    id="validationServer03"
                    aria-describedby="validationServer03Feedback"
                    required
                  />
                  {/* <div id="validationServer03Feedback" class="invalid-feedback">
                    Please provide a valid city.
                  </div> */}
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationServer04">State</label>
                  <select
                    class="custom-select is-invalid"
                    id="validationServer04"
                    aria-describedby="validationServer04Feedback"
                    required
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option>...</option>
                  </select>
                  <div id="validationServer04Feedback" class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationServer05">Zip</label>
                  <input
                    type="text"
                    class="form-control is-invalid"
                    id="validationServer05"
                    aria-describedby="validationServer05Feedback"
                    required
                  />
                  <div id="validationServer05Feedback" class="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input is-invalid"
                    type="checkbox"
                    value=""
                    id="invalidCheck3"
                    aria-describedby="invalidCheck3Feedback"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck3">
                    Agree to terms and conditions
                  </label>
                  <div id="invalidCheck3Feedback" class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default RegisterScreen;

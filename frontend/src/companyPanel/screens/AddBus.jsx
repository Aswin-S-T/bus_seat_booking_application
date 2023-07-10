import React from "react";
import MultiSelect from "../components/MultiSelect";
import MyComponent from "../components/MyComponent";
import SelectBox from "../components/SelectBox";

function AddBus() {
  return (
    <div className="p-1">
      <div className="dashboard p-4">
        <h4 className="text-center">Add your Bus Details</h4>
        <form className="mt-4">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Name</label>
              <input type="text" class="form-control"/>
            </div>
            <div class="form-group col-md-6">
              <label >Bus No</label>
              <input type="text" class="form-control" />
            </div>
          </div>
         
          <div class="form-group">
            <label>Select Routes</label>
           
            <SelectBox />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label >Rate/Km</label>
              <input type="number" class="form-control"  />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Total Seats</label>
              <input type="number" className="form-control" />
            </div>
          </div>

          <button type="submit" class="submitBtn">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBus;

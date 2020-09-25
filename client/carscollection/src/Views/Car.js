import React from "react";

function Car() {
  return (
    <div className="px-3">
      <h5>CREATE A NEW CAR - 🚗</h5>

      <form>
        <div className="form-group">
          <label for="InputCar">Brand</label>
          <input type="text" className="form-control" id="InputCar" />
        </div>
        <div className="form-group">
          <label for="InputYear">Year</label>
          <input type="text" className="form-control" id="InputYear" />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default Car;

import { Button } from "@mui/material";
import React from "react";

const HookFormOne = () => {
  return (
    <>

      <div className="container py-3 ">
        <div className="card border-0 shadow w-50 p-3 mx-auto">
            <form>

          <div className="form-group">
            <label htmlFor="fullname" className="text">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Enter Your Full Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="fullname" className="text">E-mail Address</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter Your E-mail Address"
            />
          </div>

          <div className="form-group">
          <label htmlFor="phone" className="text">Phone Number</label>
          <input
            className="form-control"
            id="phone"
            placeholder="Enter Your Phone Number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="text">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>


        <div className="form-group">
          <label htmlFor="state" className="text">Choose Your State</label>
          <select className="form-control" id="state">
            <option value="">--- Select Your State ---</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Assam">Assam</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Punjab">Punjab</option>
          </select>
        </div>




        <div className="form-group">
          <label htmlFor="gender" className="text">Choose Your Gender -</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              value="male"
              name="gender"
            />
            <label className="form-check-label" htmlFor="male">male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              value="female"
              name="gender"
            />
            <label className="form-check-label" htmlFor="female">female</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="other"
              value="other"
              name="gender"
            />
            <label className="form-check-label" htmlFor="other">other</label>
          </div>
        </div>


        <div className="form-group">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="tnc" />
            <label className="form-check-label" htmlFor="tnc"
              >I agree all terms & conditions</label
            >
          </div>
        </div>

       <Button type="Submit" variant="contained" className="btn_validation">Submit</Button>
            </form>
        </div>
      </div>
    </>
  );
};

export default HookFormOne;

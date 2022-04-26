import React from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../Styles";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <FormContainer>
      <div className="form">
        <h2>
          Create an <span className="colorize">Account</span>
        </h2>
        <form action="" className="form-wrapper">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" name="name" id="name" />
          </div>
          <div className="input-group">
            <label htmlFor="date">Date</label>
            <input type="text" value={new Date().toDateString()} readOnly />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" name="email" id="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>
          <div className="input-group">
            <button className="btn btn-primary">Register Account</button>
          </div>
          <div className="input-group">
            <p>
              Already have an account{" "}
              <span
                className="colorize cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign In
              </span>
            </p>
          </div>
        </form>
      </div>
    </FormContainer>
  );
};

export default SignUp;

import React from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "./../Styles";
const Login = () => {
  const navigate = useNavigate();
  return (
    <FormContainer>
      <div className="form">
        <h2>
          Sign In Into <span className="colorize">Account</span>
        </h2>
        <form action="" className="form-wrapper">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="input-group">
            <button className="btn btn-primary">Sign In</button>
          </div>
          <p className="line">Or</p>
          <div className="social-login">
            <img
              width={40}
              src="https://pennovate.co/wp-content/uploads/2022/01/Google-Logo.png"
              alt=""
            />
            <span>Continue with Google</span>
          </div>
          <div className="input-group">
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/sign-up")}
                className="colorize cursor-pointer"
              >
                Create
              </span>
            </p>
          </div>
        </form>
      </div>
    </FormContainer>
  );
};

export default Login;

import axios from "axios";
import { GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../../Firebase/Firebase.config";
import useFirebase from "../../../Hooks/useFirebase";
import useTitle from "../../../Hooks/useTitle";
import { FormContainer } from "./../Styles";
const Login = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { socialSignIn, isAuth } = useFirebase();
  useEffect(() => {
    if (isAuth) {
      /* send user info on backend for authorization */
      axios
        .post("http://localhost:5000/login", {
          uid: auth?.currentUser?.uid,
        })
        .then((res) => {
          sessionStorage.setItem("accessToken", res.data.token);
        })
        .catch((err) => console.log(err));
      navigate(from, { replace: true });
    }
  }, [isAuth, navigate, from]);
  /* handle google sign in */
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    socialSignIn(provider);
  };

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  /* Handle login form */
  const handleLoginForm = async (event) => {
    event.preventDefault();
    if (!loginInput.email)
      return toast.error("Email is required.", { position: "top-center" });
    if (!loginInput.password)
      return toast.error("Password is required.", { position: "top-center" });

    await signInWithEmailAndPassword(
      auth,
      loginInput.email,
      loginInput.password
    )
      .then((res) => {
        toast.success("Sign In successfully done.");
      })
      .catch((err) => {
        toast.error(err.message.split(":")[1]);
      });
  };

  return (
    <FormContainer>
      <div className="form">
        <h2>
          Sign In Into <span className="colorize">Account</span>
        </h2>
        <form action="" className="form-wrapper" onSubmit={handleLoginForm}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(event) =>
                setLoginInput({ ...loginInput, email: event.target.value })
              }
              placeholder="Email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(event) =>
                setLoginInput({ ...loginInput, password: event.target.value })
              }
              placeholder="Password"
            />
          </div>
          <div className="input-group">
            <button className="btn btn-primary">Sign In</button>
          </div>
          <p className="line">Or</p>
          <div className="social-login" onClick={handleGoogleSignIn}>
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

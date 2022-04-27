import axios from "axios";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../../Firebase/Firebase.config";
import useFirebase from "../../../Hooks/useFirebase";
import useTitle from "../../../Hooks/useTitle";
import { FormContainer } from "../Styles";

const SignUp = () => {
  useTitle("Sign up");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { isAuth } = useFirebase();
  useEffect(() => {
    if (isAuth) {
      /* send user info on backend for authorization */
      axios
        .post("https://volunteers-app-server.herokuapp.com/login", {
          uid: auth?.currentUser?.uid,
        })
        .then((res) => {
          sessionStorage.setItem("accessToken", res.data.token);
        })
        .catch((err) => console.log(err));
      navigate(from, { replace: true });
    }
  }, [isAuth, navigate, from]);

  /* handle create user */
  const [userInput, setUserInput] = useState({
    name: "",
    date: new Date().toDateString(),
    work: "",
    email: "",
    password: "",
  });
  const handleCreateUser = async (event) => {
    event.preventDefault();
    if (!userInput.name)
      return toast.error("Name field is required.", { position: "top-center" });
    if (!userInput.work)
      return toast.error("Work field is required.", { position: "top-center" });
    if (!userInput.email)
      return toast.error("Email field is required.", {
        position: "top-center",
      });
    if (!userInput.password)
      return toast.error("Password field is required.", {
        position: "top-center",
      });

    const createUserData = {
      name: userInput?.name,
      createdAt: userInput?.date,
      work: userInput?.work,
      email: userInput?.email,
    };

    await createUserWithEmailAndPassword(
      auth,
      userInput.email,
      userInput.password
    )
      .then((res) => {
        if (res) {
          updateProfile(auth.currentUser, { displayName: userInput.name }).then(
            (res) => {
              axios
                .post(
                  `https://volunteers-app-server.herokuapp.com/create-user`,
                  {
                    ...createUserData,
                    uid: auth?.currentUser?.uid,
                  }
                )
                .then((res) => {
                  toast.success(res.data.message);
                })
                .catch((err) => {
                  console.log("create user", err);
                });
            }
          );
        }
      })
      .catch((err) => {
        toast.error(err.message.split(":")[1], { position: "top-center" });
      });
  };

  return (
    <FormContainer>
      <div className="form">
        <h2>
          Create an <span className="colorize">Account</span>
        </h2>
        <form action="" className="form-wrapper" onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              onChange={(event) =>
                setUserInput({ ...userInput, name: event.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              value={new Date().toDateString()}
              readOnly
              onChange={(event) =>
                setUserInput({ ...userInput, date: event.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="work">Work</label>
            <input
              type="text"
              placeholder="Work"
              name="work"
              id="work"
              onChange={(event) =>
                setUserInput({ ...userInput, work: event.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              onChange={(event) =>
                setUserInput({ ...userInput, email: event.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onChange={(event) =>
                setUserInput({ ...userInput, password: event.target.value })
              }
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

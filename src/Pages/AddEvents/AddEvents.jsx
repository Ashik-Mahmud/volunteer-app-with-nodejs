import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { auth } from "../../Firebase/Firebase.config";
import useTitle from "../../Hooks/useTitle";
const AddEvents = () => {
  useTitle("Add Events");
  const navigate = useNavigate();
  const [eventInput, setEventInput] = useState({
    title: "",
    date: "",
    description: "",
    image: "",
  });

  /* handle event submit form */
  const handleEventSubmitForm = async (event) => {
    event.preventDefault();
    if (!eventInput.title) return toast.error("Title Field is required.");
    if (!eventInput.date) return toast.error("Date Field is required.");
    if (!eventInput.description)
      return toast.error("Description Field is required.");
    if (!eventInput.image) return toast.error("Image Field is required.");
    const eventData = {
      title: eventInput.title,
      date: eventInput.date,
      description: eventInput.description,
      image: eventInput.image,
      author: {
        name: auth?.currentUser?.displayName,
        email: auth?.currentUser?.email,
      },
      uid: auth?.currentUser?.uid,
    };
    await axios
      .post("https://volunteers-app-server.herokuapp.com/events", {
        body: eventData,
        authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      })
      .then((res) => {
        toast.success(res.data.message);
        event.target.reset();
        navigate("/events");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AddEventsContainer>
      <div className="container">
        <h3>Add Events Container</h3>
        <div className="event-wrapper">
          <form
            action=""
            className="form-wrapper"
            onSubmit={handleEventSubmitForm}
          >
            <div className="group">
              <div className="input-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  id="title"
                  name="title"
                  onChange={(e) =>
                    setEventInput({ ...eventInput, title: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  onChange={(e) =>
                    setEventInput({ ...eventInput, date: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="desc">Description</label>
              <textarea
                type="text"
                placeholder="Description"
                id="desc"
                name="desc"
                rows={3}
                onChange={(e) =>
                  setEventInput({ ...eventInput, description: e.target.value })
                }
              ></textarea>
            </div>
            <div className="input-group">
              <label htmlFor="url">Upload Image / URL</label>
              <input
                type="url"
                id="url"
                name="url"
                placeholder="Put Image Url"
                onChange={(e) =>
                  setEventInput({ ...eventInput, image: e.target.value })
                }
              />
            </div>

            <div className="input-group">
              <button className="btn btn-primary">Add Event</button>
            </div>
          </form>
        </div>
      </div>
    </AddEventsContainer>
  );
};
const AddEventsContainer = styled.section`
  position: relative;
  margin: 1rem 0rem;
  padding: 3rem;
  h3 {
    margin: 1rem 0rem;
    font-size: 1.5rem;
  }
  .event-wrapper {
    position: relative;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);
    padding: 3rem;
    background: var(--accent-color);
  }
  .form-wrapper {
    margin: 1rem 0rem;
    position: relative;
    .group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      gap: 1rem;
    }
    .input-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      width: 100%;
      margin-bottom: 1rem;
      align-items: flex-start;
      input,
      textarea {
        width: 100%;
        padding: 0.8rem 1rem;
        border: 1px solid #ccc;
        outline: none;
        font-size: 1rem;
        font-family: var(--montserrat);
        border-radius: 5px;
      }
    }
  }
`;
export default AddEvents;

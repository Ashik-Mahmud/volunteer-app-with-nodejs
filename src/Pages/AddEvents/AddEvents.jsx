import React from "react";
import styled from "styled-components";

const AddEvents = () => {
  return (
    <AddEventsContainer>
      <div className="container">
        <h3>Add Events Container</h3>
        <div className="event-wrapper">
          <form action="" className="form-wrapper">
            <div className="group">
              <div className="input-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  id="title"
                  name="title"
                />
              </div>
              <div className="input-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" />
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
              ></textarea>
            </div>
            <div className="input-group">
              <label htmlFor="url">Upload Image / URL</label>
              <input
                type="url"
                id="url"
                name="url"
                placeholder="Put Image Url"
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

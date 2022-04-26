import React from "react";
import styled from "styled-components";

const Event = ({ title, date, description, image }) => {
  return (
    <EventContainer>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="desc">
        <div>
          <h3>{title}</h3>
          <span>{date}</span>
          <p>{description}</p>
        </div>
        <div className="btn-group">
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Cancel</button>
        </div>
      </div>
    </EventContainer>
  );
};

const EventContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);
  height: 200px;
  img {
    height: 100%;
  }
  .image {
    width: 250px;
    border-radius: 10px;
    overflow: hidden;
  }
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    p {
      line-height: 1.4;
      margin: 1rem 0rem;
      font-size: 0.9rem;
      color: #888;
    }
    .btn-group {
      text-align: center;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: relative;
      button {
        position: relative;
      }
    }
  }
`;

export default Event;
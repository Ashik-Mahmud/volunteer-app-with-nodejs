import React from "react";
import styled from "styled-components";
import Event from "./Event/Event";

const Events = () => {
  return (
    <EventsContainer>
      <div className="container">
        <div className="title">
          <h2>Events</h2>
        </div>
        <div className="events-container">
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    </EventsContainer>
  );
};
const EventsContainer = styled.section`
  position: relative;
  padding: 3rem 0rem;
  .title {
    margin: 2rem 0rem;
    position: relative;
  }
  .events-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
`;
export default Events;

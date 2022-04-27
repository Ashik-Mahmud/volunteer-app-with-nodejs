import axios from "axios";
import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader/Loader";
import NotFound from "../../Components/NotFound/NotFound";
import { auth } from "../../Firebase/Firebase.config";
import useEvents from "../../Hooks/useEvents";
import Event from "./Event/Event";

const Events = () => {
  const { events, loading, setEvents } = useEvents();
  const handleEventDelete = async (id) => {
    const proceed = window.confirm("Do you want to delete?");
    if (proceed) {
      await axios
        .delete(
          `http://localhost:5000/event?eventId=${id}&&uid=${auth?.currentUser?.uid}`,
          {
            headers: {
              authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => {
          const restEvents = events.filter((event) => event._id !== id);
          setEvents(restEvents);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <EventsContainer>
      <div className="container">
        <div className="title">
          <h2>Events</h2>
        </div>
        <div className="events-container">
          {events.length > 0 ? (
            loading ? (
              events.map((event) => (
                <Event
                  handleEventDelete={handleEventDelete}
                  key={event._id}
                  {...event}
                />
              ))
            ) : (
              <Loader />
            )
          ) : (
            <NotFound
              options={{ sin: "Event", pul: "Events", redirect: "/add-event" }}
            />
          )}
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

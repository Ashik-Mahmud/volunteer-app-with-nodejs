import axios from "axios";
import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader/Loader";
import NotFound from "../../Components/NotFound/NotFound";
import { auth } from "../../Firebase/Firebase.config";
import useEvents from "../../Hooks/useEvents";
import useTitle from "../../Hooks/useTitle";
import Event from "./Event/Event";

const Events = () => {
  useTitle("Events");
  const { events, loading, setEvents } = useEvents();
  const handleEventDelete = async (id) => {
    const proceed = window.confirm("Do you want to delete?");
    if (proceed) {
      await axios
        .delete(
          `https://volunteer-app-v1.onrender.com/event?eventId=${id}&&uid=${auth?.currentUser?.uid}`,
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
          {loading ? (
            events.length > 0 ? (
              events.map((event) => (
                <Event
                  handleEventDelete={handleEventDelete}
                  key={event._id}
                  {...event}
                />
              ))
            ) : (
              <NotFound
                options={{
                  sin: "Event",
                  pul: "Events",
                  redirect: "/add-event",
                }}
              />
            )
          ) : (
            <Loader />
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

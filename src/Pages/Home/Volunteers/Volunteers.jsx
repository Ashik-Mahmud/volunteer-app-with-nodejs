import React from "react";
import styled from "styled-components";
import Loader from "../../../Components/Loader/Loader";
import NotFound from "../../../Components/NotFound/NotFound";
import Volunteer from "./Volunteer/Volunteer";
const Volunteers = ({ options: { volunteers, loading } }) => {
  return (
    <div className="container">
      {loading ? (
        volunteers.length > 0 ? (
          <VolunteersContainer>
            {volunteers.map((volunteer) => (
              <Volunteer key={volunteer._id} {...volunteer} />
            ))}
          </VolunteersContainer>
        ) : (
          <NotFound
            options={{
              sin: "Event",
              pul: "Events",
            }}
          />
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

const VolunteersContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 2rem;
  margin: 2rem 0rem;
`;
export default Volunteers;

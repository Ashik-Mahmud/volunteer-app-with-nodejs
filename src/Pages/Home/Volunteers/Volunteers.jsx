import React from "react";
import styled from "styled-components";
import Volunteer from "./Volunteer/Volunteer";
const Volunteers = () => {
  return (
    <div className="container">
      <VolunteersContainer>
        <Volunteer />
        <Volunteer />
        <Volunteer />
        <Volunteer />
        <Volunteer />
      </VolunteersContainer>
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

import React from "react";
import styled from "styled-components";
import Img from "../../../../Assets/images/childSupport.png";
const Volunteer = () => {
  return (
    <VolunteerContainer>
      <div className="image">
        <img src={Img} alt="img" />
      </div>
      <div className="title">
        <h3>Support Child</h3>
      </div>
    </VolunteerContainer>
  );
};
const VolunteerContainer = styled.div`
  position: relative;
  border: 1px solid #f8f8f8;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 0rem;
  overflow: hidden;
  cursor: pointer;
  .title {
    background: #ffffffcc;
    padding: 1rem 1rem;
    position: absolute;
    z-index: 1;
    left: 0%;
    bottom: 0%;
    width: 100%;
    backdrop-filter: blur(4px);
  }
`;
export default Volunteer;

import React from "react";
import styled from "styled-components";
import Icon from "../../../Assets/logos/users-alt 1.png";
const Donation = ({ title }) => {
  return (
    <DonationContainer>
      <div className="icon">
        <img src={Icon} alt="" />
      </div>
      <h3>{title}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <button className="btn btn-primary">Donate</button>
    </DonationContainer>
  );
};

const DonationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
`;
export default Donation;

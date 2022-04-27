import React from "react";
import styled from "styled-components";
import useTitle from "../../Hooks/useTitle";
import Donation from "./Donation/Donation";

const Donations = () => {
  useTitle("Donations");
  return (
    <DonationsContainer>
      <div className="container">
        <div className="title">
          <h2>Donations Helpless peoples</h2>
        </div>
        <div className="donations-container">
          <Donation title="Helpless People" />
          <Donation title="Street Child" />
          <Donation title="Helpless Widow" />
          <Donation title="Helpless Parents" />
          <Donation title="Holy Temple" />
          <Donation title="Old Home" />
        </div>
      </div>
    </DonationsContainer>
  );
};
const DonationsContainer = styled.section`
  position: relative;
  padding: 3rem 0rem;
  .title {
    margin: 2rem 0rem;
    position: relative;
    text-align: center;
    margin-bottom: 3rem;
  }
  .donations-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 3rem;
  }
`;
export default Donations;

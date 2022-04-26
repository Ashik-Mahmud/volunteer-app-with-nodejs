import React from "react";
import styled from "styled-components";
const Home = () => {
  return (
    <HomeContainer>
      <div className="container">
        <h1>HomeContainer</h1>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  position: relative;
`;

export default Home;

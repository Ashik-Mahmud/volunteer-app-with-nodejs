import React from "react";
import styled from "styled-components";
import Volunteers from "../Volunteers/Volunteers";
import Search from "./../Search/Search";
const Home = () => {
  return (
    <HomeContainer>
      <div className="container">
        <h1>HomeContainer</h1>
        <Search />
        <Volunteers />
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  position: relative;
`;

export default Home;

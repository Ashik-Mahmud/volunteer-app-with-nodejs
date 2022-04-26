import React from "react";
import styled from "styled-components";
import Volunteers from "../Volunteers/Volunteers";
import Search from "./../Search/Search";
const Home = () => {
  return (
    <HomeContainer>
      <div className="container">
        <Search />
        <Volunteers />
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  position: relative;
  padding: 2rem 0rem;
`;

export default Home;

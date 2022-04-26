import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      <img
        width={400}
        src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif"
        alt="loader"
      />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem 0rem;
`;

export default Loader;

import React from "react";
import styled from "styled-components";

const NotFound404 = () => {
  return (
    <NotFoundContainer>
      <div className="container">
        <h1>NotFound</h1>
      </div>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.section`
  position: relative;
  padding: 3rem 0rem;
  text-align: center;
`;

export default NotFound404;

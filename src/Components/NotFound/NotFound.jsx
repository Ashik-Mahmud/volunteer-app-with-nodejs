import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFound = ({ options: { sin, pul, redirect } }) => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <h3>Not {pul} Found Yet.</h3>
      <button className="btn btn-primary" onClick={() => navigate(redirect)}>
        Add {sin}
      </button>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  position: relative;
  padding: 3rem 0rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export default NotFound;

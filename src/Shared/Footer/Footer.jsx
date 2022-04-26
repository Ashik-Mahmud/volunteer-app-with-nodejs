import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <p>
          &copy; Copyright by {new Date().getFullYear()} & Alright Reserved{" "}
          <span className="colorize">Volunteers Networks</span>
        </p>
      </div>
    </FooterContainer>
  );
};
const FooterContainer = styled.footer`
  position: relative;
  text-align: center;
  padding: 1rem 0rem;
  margin-top: 1rem;
`;
export default Footer;

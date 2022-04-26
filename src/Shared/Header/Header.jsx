import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../Assets/logos/logo.png";
const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <nav className="navbar">
          <Link className="logo" to="/">
            <img width={200} src={Logo} alt="logo" />
          </Link>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/donations">Donations</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/add-event">Add Event</NavLink>
            </li>
            <li>
              <NavLink to="/volunteer-list">Volunteers</NavLink>
            </li>
            <li>
              <NavLink to="/login" className="btn btn-primary">
                Sign In
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  position: relative;
  padding: 1rem 0rem;
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 2rem;
      position: relative;
      a {
        font-size: 1.1rem;
        color: var(--secondary-color);
        &.active {
          color: var(--primary-color);
        }
      }
    }
  }
`;
export default Header;

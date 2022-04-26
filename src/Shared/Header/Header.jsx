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
            {/*  <li>
              <NavLink to="/login" className="btn btn-primary">
                Sign In
              </NavLink>
            </li> */}
          </ul>
          <div className="profile">
            <div className="avatar">
              <span>A</span>
            </div>
            <div className="details">
              <p>Ashik Mahmud</p>
            </div>
            <button className="btn btn-danger">Log Out</button>
          </div>
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
    .profile {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .avatar {
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        border: 3px solid #ddd;
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--primary-color);
      }
    }
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

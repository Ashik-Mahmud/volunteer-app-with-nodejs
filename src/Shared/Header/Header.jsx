import { signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { AppContext } from "../../App";
import { auth } from "../../Firebase/Firebase.config";
const Header = () => {
  const [submenu, setSubmenu] = useState(false);
  const [menu, setMenu] = useState(false);
  const { isAuth } = useContext(AppContext);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await signOut(auth).then(() => {
      toast.success("Sign Out successfully done.");
      navigate("/login");
    });
  };
  const [scroll, setScroll] = useState(0);
  const scrollRunning = (event) => {
    setScroll(event.path[1].scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollRunning);

    return () => window.removeEventListener("scroll", scrollRunning);
  }, []);

  return (
    <HeaderContainer className={scroll > 120 ? "active" : " "}>
      <div className="container">
        <nav className="navbar">
          <Link className="logo" to="/">
            <img
              width={80}
              src={
                "https://seeklogo.com/images/N/nature-hand-logo-6B48B645B2-seeklogo.com.png"
              }
              alt="logo"
            />
          </Link>
          <ul className={menu ? "active" : " "}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/donations">Donations</NavLink>
            </li>

            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            {isAuth ? (
              <>
                <li className="submenu-link">
                  <Link
                    onClick={() => setSubmenu((prev) => !prev)}
                    to="#"
                    className="cursor-pointer"
                  >
                    Dashboard
                  </Link>
                  <ul className={`submenu ${submenu ? "active" : " "}`}>
                    <li>
                      <NavLink to="/add-event">Add Event</NavLink>
                    </li>
                    <li>
                      <NavLink to="/events">Manage Events</NavLink>
                    </li>
                    <li>
                      <NavLink to="/add-blog">Add Blog</NavLink>
                    </li>
                    <li>
                      <NavLink to="/manage-blogs">Manage Blogs</NavLink>
                    </li>
                    {auth?.currentUser?.email === "ashikmamud187@gmail.com" && (
                      <li>
                        <NavLink to="/volunteer-list">Volunteers</NavLink>
                      </li>
                    )}
                  </ul>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login" className="btn btn-primary">
                  Sign In
                </NavLink>
              </li>
            )}
          </ul>
          <div
            className={`menu-bar ${menu ? "active" : " "}`}
            onClick={() => setMenu((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {isAuth && (
            <div className="profile">
              <div className="avatar">
                <span>
                  {auth?.currentUser?.photoURL ? (
                    <img
                      src={auth?.currentUser?.photoURL}
                      alt={auth?.currentUser?.displayName}
                    />
                  ) : (
                    auth?.currentUser?.displayName?.slice(0, 1)
                  )}
                </span>
              </div>
              <div className="details">
                <p>{auth?.currentUser?.displayName || "Not available"}</p>
              </div>
              <button onClick={handleSignOut} className="btn btn-danger">
                Log Out
              </button>
            </div>
          )}
        </nav>
      </div>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  position: relative;
  padding: 1rem 0rem;
  transition: all 0.5s ease;
  &.active {
    position: sticky;
    top: 0;
    z-index: 5;
    background: #fff;
    box-shadow: 0px 0px 4px #00000014;
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .menu-bar {
      position: relative;
      cursor: pointer;
      display: none;
      @media (max-width: 900px) {
        display: block;
      }
      span {
        display: block;
        width: 30px;
        height: 2px;
        background-color: #333;
        margin-bottom: 0.5rem;
        transition: all 0.5s ease;
        position: relative;
        &:first-child {
          width: 24px;
        }
        &:last-child {
          width: 24px;
        }
      }
      &.active {
        span {
          width: 30px;
          &:first-child {
            transform: rotate(-45deg);
            left: -1px;
            top: 10px;
          }
          &:last-child {
            transform: rotate(45deg);
            left: -1px;
            top: -8px;
          }
          &:nth-child(2) {
            transform: scale(0);
          }
        }
      }
    }
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
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 2rem;
      position: relative;
      @media (max-width: 900px) {
        flex-direction: column;
        background: #fff;
        position: absolute;
        left: 0%;
        top: 100%;
        z-index: 3;
        width: 100%;
        padding: 2rem;
        height: auto;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);
        border-radius: 10px;
        gap: 1rem;
        align-items: flex-start;
        opacity: 0;
        transform: translateY(20px);
        pointer-events: none;
        transition: all 0.5s ease;
        &.active {
          opacity: 1;
          transform: translateY(0px);
          pointer-events: all;
        }
      }
      a {
        font-size: 1.1rem;
        color: var(--secondary-color);
        &.active {
          color: var(--primary-color);
        }
      }
    }
  }
  .submenu-link {
    position: relative;
    ul {
      position: absolute;
      background-color: var(--accent-color);
      width: 200px;
      padding: 1.2rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      top: 2.3rem;
      z-index: 5;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);
      border-radius: 5px;
      transform: translateY(14px);
      opacity: 0;
      pointer-events: none;
      transition: all 0.4s ease;
      a {
        position: relative;
        transition: all 0.5s ease;
      }
      a {
        position: relative;
        &:hover {
          color: var(--primary-color);
        }
      }
      &.active {
        opacity: 1;
        transform: translateY(0px);
        pointer-events: all;
      }
    }
  }
`;
export default Header;

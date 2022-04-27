import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { AppContext } from "../../App";
import { auth } from "../../Firebase/Firebase.config";
const Header = () => {
  const [submenu, setSubmenu] = useState(false);
  const { isAuth } = useContext(AppContext);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await signOut(auth).then(() => {
      toast.success("Sign Out successfully done.");
      navigate("/login");
    });
  };

  return (
    <HeaderContainer>
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
          <ul>
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

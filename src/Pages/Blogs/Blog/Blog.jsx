import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Blog = ({ _id, views, title, image, description, category, author }) => {
  const navigate = useNavigate();
  /* Handle Increase Views  */
  const handleIncreaseView = async (id) => {
    await axios
      .patch(`https://volunteers-app-server.herokuapp.com/views?id=${id}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <BlogContainer>
      {" "}
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="desc">
        <div>
          <h3>{title}</h3>
          <div className="meta">
            <span>23 Jan, 2022</span>
            <span>{category}</span>
            <span>{author?.name}</span>
          </div>
          <p>{description.slice(0, 200)}</p>
        </div>
        <div className="btn-group group">
          <button
            onClick={() => {
              navigate(`/blog-details/${_id}`);
              handleIncreaseView(_id);
            }}
            className="btn btn-primary-alt"
          >
            See Details
          </button>
          <div>
            <img
              src="https://www.freeiconspng.com/thumbs/click-png/mouse-cursor-click-png-outline-2.png"
              alt="click"
              width={25}
            />{" "}
            <span>{views || 0}</span>
          </div>
        </div>
      </div>
    </BlogContainer>
  );
};
const BlogContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);
  flex-direction: column;
  width: 100%;
  .meta {
    margin: 0.3rem 0rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  object-fit: cover;
  }
  .image {
    height: 200px;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    img {
    height: 100%;
    width: 100%;
    
  }

 
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    p {
      line-height: 1.4;
      margin: 1rem 0rem;
      font-size: 0.9rem;
      color: #888;
    }
    .btn-group {
      text-align: center;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      position: relative;
      button {
        position: relative;
      }
    }
  }
`;
export default Blog;

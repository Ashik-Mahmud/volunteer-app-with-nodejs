import React from "react";
import styled from "styled-components";
import Img from "../../../Assets/images/birdHouse.png";

const Blog = () => {
  return (
    <BlogContainer>
      {" "}
      <div className="image">
        <img src={Img} alt="img" />
      </div>
      <div className="desc">
        <div>
          <h3>Support Child</h3>
          <span>23 Jan, 2022</span>
          <p>
            please support peoples and know more about them self and make them
            smile as well
          </p>
        </div>
        <div className="btn-group">
          <button className="btn btn-primary-alt">See Details</button>
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
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .image {
    height: 200px;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
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

      position: relative;
      button {
        position: relative;
      }
    }
  }
`;
export default Blog;

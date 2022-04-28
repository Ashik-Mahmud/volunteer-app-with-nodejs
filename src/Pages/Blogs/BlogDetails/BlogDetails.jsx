import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../../Components/Loader/Loader";
import useBlogs from "../../../Hooks/useBlogs";
import useTitle from "../../../Hooks/useTitle";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { blogs, loading } = useBlogs();
  const { blogId } = useParams();
  const currentBlog = blogs.find((blog) => blog._id === blogId);
  useTitle(currentBlog?.title || "loading");

  return (
    <BlogDetailsContainer>
      <div className="container">
        {loading ? (
          <div className="card">
            <div className="card-header">
              <button onClick={() => navigate(-1)}>
                <img
                  width={35}
                  src="https://icons-for-free.com/download-icon-arrows+double+arrow+doublechevronleft+left+icon-1320185729725994033_256.png"
                  alt="back"
                />{" "}
                Back
              </button>
            </div>
            <div className="card-image">
              <img src={currentBlog?.image} alt={currentBlog?.title} />
            </div>
            <div className="card-body">
              <h2>{currentBlog?.title} </h2>
              <ul className="meta">
                <li>{currentBlog?.createdAt} </li>
                <li>{currentBlog?.category}</li>
                <li>{currentBlog?.author?.name}</li>
              </ul>
              <div className="desc">
                <p>{currentBlog?.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </BlogDetailsContainer>
  );
};

const BlogDetailsContainer = styled.section`
  position: relative;
  .card {
    padding: 1rem 0rem;
    margin: 2rem;
    position: relative;
    .card-header {
      position: relative;
      button {
        background-color: transparent;
        font-size: 1rem;
        position: relative;
        cursor: pointer;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        gap: 0.2rem;
        font-family: var(--montserrat);
      }
    }
    .card-image {
      width: 100%;
      height: 400px;
      background: #333;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      margin: 1rem 0rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
      }
    }
    .card-body {
      position: relative;
      .meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 2rem;
        margin: 1rem 0rem;
      }
      .desc {
        margin: 1rem 0rem;
        position: relative;
        font-size: 1rem;
        line-height: 1.7;
      }
    }
  }
`;

export default BlogDetails;

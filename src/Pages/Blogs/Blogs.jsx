import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader/Loader";
import useBlogs from "../../Hooks/useBlogs";
import useTitle from "../../Hooks/useTitle";
import Blog from "./Blog/Blog";

const Blogs = () => {
  useTitle("Blogs");
  const { blogs, loading } = useBlogs();

  return (
    <BlogsContainer>
      <div className="container">
        <div className="title">
          <h2>Read Blogs And Gether your knowledge</h2>
          <p>
            here we will know more about support of humanity and make them smile
            of your effort.
          </p>
        </div>
        {loading ? (
          blogs.length > 0 ? (
            <div className="donations-container">
              {blogs.map((blog) => (
                <Blog key={blog._id} {...blog} />
              ))}
            </div>
          ) : (
            "No blog found yet."
          )
        ) : (
          <Loader />
        )}
      </div>
    </BlogsContainer>
  );
};
const BlogsContainer = styled.section`
  position: relative;
  padding: 3rem 0rem;
  .title {
    margin: 2rem 0rem;
    position: relative;
  }
  .donations-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
`;
export default Blogs;

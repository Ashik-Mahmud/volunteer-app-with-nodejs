import React from "react";
import styled from "styled-components";
import Blog from "./Blog/Blog";

const Blogs = () => {
  return (
    <BlogsContainer>
      {/* <h2>Blog Not Available It's comes very soon.</h2>
      <button title="Disabled Button" className="btn btn-primary-alt" disabled>
        Create Your Own Blog
      </button> */}
      <div className="container">
        <div className="title">
          <h2>Read Blogs And Gether your knowledge</h2>
          <p>
            here we will know more about support of humanity and make them smile
            of your effort.
          </p>
        </div>
        <div className="donations-container">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </BlogsContainer>
  );
};
const BlogsContainer = styled.section`
  /* position: relative;
  text-align: center;
  padding: 5rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center; */
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

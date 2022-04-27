import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { auth } from "../../Firebase/Firebase.config";
import useTitle from "../../Hooks/useTitle";
const AddBlog = () => {
  useTitle("Add blog");
  const navigate = useNavigate();
  const [blogInput, setBlogInput] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
  });

  /* handle add blog form  */
  const handleAddBlogForm = async (event) => {
    event.preventDefault();
    if (!blogInput.title) return toast.error("Title field is required.");
    if (!blogInput.category) return toast.error("Category field is required.");
    if (!blogInput.description)
      return toast.error("Description field is required.");
    if (!blogInput.image) return toast.error("Image field is required.");

    const blogContent = {
      title: blogInput.title,
      category: blogInput.category,
      description: blogInput.description,
      image: blogInput.image,
      uid: auth?.currentUser?.uid,
      createdAt: new Date().toDateString(),
      author: {
        name: auth?.currentUser?.displayName,
        email: auth?.currentUser?.email,
      },
    };
    await axios
      .post(`https://volunteers-app-server.herokuapp.com/blog`, {
        body: blogContent,
        authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      })
      .then((res) => {
        toast.success(res.data.message);
        navigate("/manage-blogs");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <AddBlogContainer>
      <div className="container">
        <div className="blog-wrapper">
          <h2>Add Your Blog</h2>
          <form action="" className="form-wrapper" onSubmit={handleAddBlogForm}>
            <div className="input-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                id="title"
                onChange={(e) =>
                  setBlogInput({ ...blogInput, title: e.target.value })
                }
              />
            </div>
            <div className="input-group">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                placeholder="Category"
                name="category"
                id="category"
                onChange={(e) =>
                  setBlogInput({ ...blogInput, category: e.target.value })
                }
              />
            </div>
            <div className="input-group">
              <label htmlFor="desc">Description</label>
              <textarea
                placeholder="Description"
                rows={10}
                name="desc"
                id="desc"
                onChange={(e) =>
                  setBlogInput({ ...blogInput, description: e.target.value })
                }
              ></textarea>
            </div>
            <div className="input-group">
              <label htmlFor="image">Image URL</label>
              <input
                type="url"
                placeholder="Put Image URL"
                name="image"
                id="image"
                onChange={(e) =>
                  setBlogInput({ ...blogInput, image: e.target.value })
                }
              />
            </div>
            <div className="input-group">
              <button className="btn btn-primary">Add Blog</button>
            </div>
          </form>
        </div>
      </div>
    </AddBlogContainer>
  );
};

const AddBlogContainer = styled.section`
  position: relative;
  padding: 2rem 0rem;
  .form-wrapper {
    margin: 1rem 0rem;
    background-color: var(--accent-color);
    padding: 2rem;
    position: relative;
    .input-group {
      margin: 0.5rem 0rem;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      input,
      textarea {
        padding: 1rem;
        font-size: 1rem;
        font-family: var(--montserrat);
        border: 1px solid #ccc;
        outline: none;
        border-radius: 5px;
      }
    }
  }
`;

export default AddBlog;

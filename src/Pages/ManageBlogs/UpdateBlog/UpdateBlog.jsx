import axios from "axios";
import { React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { auth } from "../../../Firebase/Firebase.config";
import useCurrentUserBlog from "../../../Hooks/useCurrentUserBlog";

const UpdateBlog = () => {
  const { blogId } = useParams();
  const { currentUserBLogs } = useCurrentUserBlog();
  const currentBlog = currentUserBLogs.find((blog) => blog._id === blogId);
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
    };
    await axios
      .post(
        `https://volunteer-app-v1.onrender.com/update-blog?blogId=${blogId}`,
        {
          body: blogContent,
          authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        }
      )
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
          <h2>Update Your Blog</h2>
          <form action="" className="form-wrapper" onSubmit={handleAddBlogForm}>
            <div className="input-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                id="title"
                value={blogInput?.title || currentBlog?.title || ""}
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
                value={blogInput?.category || currentBlog?.category || ""}
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
                value={blogInput?.description || currentBlog?.description || ""}
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
                value={blogInput?.image || currentBlog?.image || ""}
                onChange={(e) =>
                  setBlogInput({ ...blogInput, image: e.target.value })
                }
              />
            </div>
            <div className="input-group">
              <button className="btn btn-primary">Update Blog</button>
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

export default UpdateBlog;

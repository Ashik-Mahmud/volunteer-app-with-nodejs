import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../Components/Loader/Loader";
import NotFound from "../../Components/NotFound/NotFound";
import useCurrentUserBlog from "../../Hooks/useCurrentUserBlog";

const ManageBlogs = () => {
  const { currentUserBLogs, loading } = useCurrentUserBlog();
  const navigate = useNavigate();
  return (
    <ManageBlogsContainer>
      <div className="container">
        <div className="manage-blog">
          <h2>Manage Blog</h2>
          <div className="table-wrapper">
            {currentUserBLogs.length > 0 ? (
              loading ? (
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Image</th>
                      <th width={100}>status</th>
                      <th width={100}>Edit</th>
                      <th width={100}>Delete</th>
                      <th width={100}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUserBLogs.map((blog, ind) => (
                      <tr key={blog._id}>
                        <td>{ind + 1}</td>
                        <td>{blog?.title}</td>
                        <td>{blog?.category}</td>
                        <td>
                          <img
                            width={100}
                            src={blog?.image}
                            alt={blog?.title}
                          />
                        </td>
                        <td>
                          <span className="colorize">Active</span>
                        </td>
                        <td>
                          <button
                            onClick={() => navigate(`/update-blog/${blog._id}`)}
                            className="btn btn-primary"
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                        <td>
                          <span className="text-danger cursor-pointer">
                            Disabled
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <Loader />
              )
            ) : (
              <NotFound
                options={{
                  sin: "Blog",
                  pul: "Blogs",
                  redirect: "/add-blog",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </ManageBlogsContainer>
  );
};

const ManageBlogsContainer = styled.section`
  position: relative;
  padding: 2rem 0rem;
  .table-wrapper {
    margin: 1rem 0rem;
    position: relative;
    background: var(--accent-color);
    padding: 2rem;
    table {
      width: 100%;
      text-align: left;
      position: relative;
      thead {
        background: #f8f8f8;
      }
      th,
      td {
        padding: 0.5rem;
      }
      img {
        border-radius: 10px;
        width: 80px;
      }
    }
  }
`;

export default ManageBlogs;

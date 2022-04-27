import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Loader from "../../Components/Loader/Loader";
import NotFound from "../../Components/NotFound/NotFound";
import { auth } from "../../Firebase/Firebase.config";
import useCurrentUserBlog from "../../Hooks/useCurrentUserBlog";
import useTitle from "../../Hooks/useTitle";

const ManageBlogs = () => {
  useTitle("Manage Blogs");
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(3);
  const { currentUserBLogs, loading, setCurrentUserBlogs } = useCurrentUserBlog(
    page,
    limit
  );

  const navigate = useNavigate();

  /* handle blog delete */
  const handleDeleteBlog = async (id) => {
    const proceed = window.confirm("Do you wanna delete this blog?");
    if (proceed) {
      await axios
        .delete(
          `https://volunteers-app-server.herokuapp.com/blog?blogId=${id}&&uid=${auth?.currentUser?.uid}`,
          {
            headers: {
              authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          const restBlogs = currentUserBLogs.filter((blog) => blog._id !== id);
          setCurrentUserBlogs(restBlogs);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  let pageNumber;
  if (currentUserBLogs > limit) {
    pageNumber = Math.ceil(currentUserBLogs / limit);
  }

  return (
    <ManageBlogsContainer>
      <div className="container">
        <div className="manage-blog">
          <h2>Manage Blog</h2>
          <div className="table-wrapper">
            {loading ? (
              currentUserBLogs?.length > 0 ? (
                <>
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
                          <td>{blog._id.slice(10, 15) + "..."}</td>
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
                              onClick={() =>
                                navigate(`/update-blog/${blog._id}`)
                              }
                              className="btn btn-primary"
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => handleDeleteBlog(blog._id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
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
                  <div className="pagination">
                    {[...Array(pageNumber).keys()].map((num) => (
                      <button
                        className={page === num ? "active" : ""}
                        onClick={() => setPage(num)}
                        key={num}
                      >
                        {num + 1}
                      </button>
                    ))}
                    <select
                      name="page"
                      id="page"
                      onChange={(e) => setLimit(e.target.value)}
                    >
                      <option value="3">3</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                </>
              ) : (
                <NotFound
                  options={{
                    sin: "Blog",
                    pul: "Blogs",
                    redirect: "/add-blog",
                  }}
                />
              )
            ) : (
              <Loader />
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
    .pagination {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      justify-content: flex-end;
      margin: 1rem 0rem;
      button,
      select {
        padding: 0.4rem;
        background-color: transparent;
        border: 1px solid #ddd;
        cursor: pointer;
        &.active {
          background-color: var(--primary-color);
          color: var(--accent-color);
          border-color: var(--primary-color);
        }
      }
    }
  }
`;

export default ManageBlogs;

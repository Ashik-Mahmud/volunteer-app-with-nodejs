import React from "react";
import styled from "styled-components";

const ManageBlogs = () => {
  return (
    <ManageBlogsContainer>
      <div className="container">
        <div className="manage-blog">
          <h2>Manage Blog</h2>
          <div className="table-wrapper">
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
                <tr>
                  <td>3</td>
                  <td>This is blog title</td>
                  <td>Tech</td>
                  <td>
                    <img
                      width={100}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7PAuPNlwu_8BAXLTXevKiuYQIl4823HY2A&usqp=CAU"
                      alt="img"
                    />
                  </td>
                  <td>
                    <span className="colorize">Active</span>
                  </td>
                  <td>
                    <button className="btn btn-primary">Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                  <td>
                    <span className="text-danger cursor-pointer">Disabled</span>
                  </td>
                </tr>
              </tbody>
            </table>
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

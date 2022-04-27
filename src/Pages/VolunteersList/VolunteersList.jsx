import React from "react";
import styled from "styled-components";
import useTitle from "../../Hooks/useTitle";

const VolunteersList = () => {
  useTitle("Volunteer List");

  return (
    <VolunteersListContainer>
      <div className="container">
        <h2>Volunteers List</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Register Date</th>
                <th>Status</th>
                <th>Delete</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td>Ashik Mahmud</td>
                <td>ashik@gmail.com</td>
                <td>23 jan, 2022</td>
                <td>
                  <span className="colorize">Active</span>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
                <td>
                  <span className="text-danger cursor-pointer">Muted</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </VolunteersListContainer>
  );
};

const VolunteersListContainer = styled.section`
  position: relative;
  margin: 1rem 0rem;
  padding: 1rem;
  h2 {
    margin: 1rem 0rem;
  }
  .table-wrapper {
    background-color: var(--accent-color);
    position: relative;
    padding: 2rem;
    table {
      width: 100%;
      margin: 1rem 0rem;
      text-align: left;
      thead {
        background: #f8f8f8;
      }
      td,
      th {
        padding: 0.7rem;
      }
    }
  }
`;

export default VolunteersList;

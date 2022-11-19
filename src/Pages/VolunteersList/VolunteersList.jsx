import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Loader from "../../Components/Loader/Loader";
import { auth } from "../../Firebase/Firebase.config";
import useTitle from "../../Hooks/useTitle";
import useUsers from "../../Hooks/useUsers";

const VolunteersList = () => {
  useTitle("Volunteer List");
  const { users, loading, setUsers } = useUsers();

  /* handle user delete */
  const handleUserDelete = async (id) => {
    const proceed = window.confirm("Do you want to delete this user?");
    if (proceed) {
      await axios
        .delete(
          `https://volunteer-app-v1.onrender.com/user?id=${id}&&uid=${auth?.currentUser?.uid}`,
          {
            headers: {
              authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          const restUsers = users.filter((user) => user._id !== id);
          setUsers(restUsers);
        });
    }
  };

  return (
    <VolunteersListContainer>
      <div className="container">
        <h2>Volunteers List</h2>
        <div className="table-wrapper">
          {loading ? (
            users.length > 0 ? (
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
                  {users.map((user, ind) => (
                    <tr key={user._id}>
                      <td>{ind + 1}</td>
                      <td>{user?.name}</td>
                      <td>{user?.email}</td>
                      <td>{user?.createdAt}</td>
                      <td>
                        <span className="colorize">Active</span>
                      </td>
                      <td>
                        <button
                          onClick={() => handleUserDelete(user?._id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <span className="text-danger cursor-pointer">
                          Muted
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              "No user found."
            )
          ) : (
            <Loader />
          )}
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

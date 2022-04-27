import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { auth } from "../../../Firebase/Firebase.config";
import useVolunteers from "../../../Hooks/useVolunteers";
import Volunteers from "../Volunteers/Volunteers";
import Search from "./../Search/Search";
const Home = () => {
  const { volunteers, loading, setVolunteers, setLoading } = useVolunteers();
  const [searchText, setSearchText] = useState("");
  const handleSearchVolunteers = async () => {
    if (!searchText) return toast.error(`Search Field is required.`);
    await axios
      .get(
        `http://localhost:5000/volunteers/search?name=${searchText}&&uid=${auth?.currentUser?.uid}`,
        {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        setVolunteers(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <HomeContainer>
      <div className="container">
        <Search
          setSearchText={setSearchText}
          handleSearchVolunteers={handleSearchVolunteers}
        />
        <Volunteers options={{ volunteers, loading }} />
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
  position: relative;
  padding: 2rem 0rem;
`;

export default Home;

import React from "react";
import styled from "styled-components";

const Search = ({ setSearchText, handleSearchVolunteers }) => {
  return (
    <SearchContainer>
      <h2>We try to help peoples around the world.</h2>
      <div className="search">
        <input
          type="search"
          id="search"
          placeholder="Search Volunteers"
          name="search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearchVolunteers} className="btn btn-primary">
          Search
        </button>
      </div>
    </SearchContainer>
  );
};
const SearchContainer = styled.div`
  position: relative;
  padding: 1rem 0rem;
  text-align: center;
  h2 {
    font-size: 2.2rem;
    margin: 0.7rem 0rem;
  }
  .search {
    display: flex;
    align-items: stretch;
    background: #ffffff;
    border: 1px solid #f8f8f8;
    border-radius: 80px;
    padding: 0.2rem;
    width: 500px;
    margin: 1.5rem auto;
    @media (max-width: 768px) {
      width: 100%;
    }
    input {
      width: 100%;
      background-color: transparent;
      outline: none;
      font-size: 1rem;
      font-family: var(--montserrat);
      border: none;
      padding: 1.1rem;
    }
    button {
      padding: 0rem 2rem;
      border-radius: 80px;
      margin: 0rem;
    }
  }
`;
export default Search;

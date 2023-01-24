import React, { useState } from "react";
import styled from "styled-components";
import iconSearch from "../../assets/images/icon-search.svg";
import { useSearchStore } from "../../stores/searchStore";

export const SearchField = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const setSearch = useSearchStore((state) => state.setSearch);

  const onSubmit = (e) => {
    e.preventDefault();

    if (value.length < 1) {
      setError(true);
      setErrorMessage("Whoops, can’t be empty…");
      return;
    }
    setError(false);
    setSearch(value);
  };
  return (
    <Container>
      <Wrapper onSubmit={onSubmit} error={error}>
        <StyledSearchField
          placeholder="Search for any word..."
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
          }}
        />
        <img src={iconSearch} alt="search" />
      </Wrapper>

      {error && <p>{errorMessage}</p>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #ff5252;
  }
`;

const Wrapper = styled.form`
  position: relative;

  img {
    position: absolute;
    top: 50%;
    right: 1.6rem;
    transform: translate(-50%, -50%);
  }
`;

const StyledSearchField = styled.input`
  position: relative;
  width: 100%;
  height: 4.8rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: ${({ theme }) => theme.color.globalText};
  background-color: ${({ theme }) => theme.color.searchBg};
  border-radius: 1.6rem;
  border: ${({ error }) => (error ? "1px solid #ff5252" : "none")};
  padding: 0 2.4rem;
  box-sizing: border-box;

  &::placeholder {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #575757;
  }

  @media screen and (min-width: 768px) {
    height: 6.4rem;
    font-size: 2rem;
    line-height: 2.1rem;
  }

  &:focus {
    outline: 1px solid #a445ed;
  }
`;

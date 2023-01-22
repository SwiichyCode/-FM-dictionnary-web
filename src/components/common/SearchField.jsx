import React from "react";
import styled from "styled-components";
import iconSearch from "../../assets/images/icon-search.svg";
import { useSearchStore } from "../../stores/searchStore";

export const SearchField = () => {
  const [value, setValue] = React.useState("");
  const setSearch = useSearchStore((state) => state.setSearch);

  const onSubmit = (e) => {
    e.preventDefault();

    setSearch(value);
  };
  return (
    <Container onSubmit={onSubmit}>
      <StyledSearchField
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      />
      <img src={iconSearch} alt="search" />
    </Container>
  );
};

const Container = styled.form`
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
  color: ${({ theme }) => theme.globalText};
  background-color: ${({ theme }) => theme.searchBg};
  border-radius: 1.6rem;
  border: none;
  padding: 0 2.4rem;

  &:focus {
    outline: none;
  }
`;

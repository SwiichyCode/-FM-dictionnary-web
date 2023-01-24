import React from "react";
import styled from "styled-components";

export const Speech = ({ meaning }) => {
  return (
    <Header className="speech">
      <h3>{meaning.partOfSpeech}</h3>
      <div className="line"></div>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  margin: 3.2rem 0;
  @media screen and (min-width: 768px) {
    margin: 4rem 0;
  }
  h3 {
    font-style: italic;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.2rem;
  }

  .line {
    width: 100%;
    /* max-width: 26.6rem; */
    height: 0.1rem;
    background: ${({ theme }) => theme.color.meaningLine};
  }
`;

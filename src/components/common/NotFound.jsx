import React from "react";
import styled from "styled-components";

export const NotFound = () => {
  return (
    <Container>
      <span>😕</span>
      <h1>No definitions Found</h1>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: calc(13.2rem - 2.4rem);

  span {
    font-size: 10rem;
    margin-bottom: 4.4rem;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-top: 1.6rem;
    color: ${({ theme }) => theme.color.globalText};
    margin-bottom: 2.4rem;
  }

  p {
    text-align: center;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 24px;
    color: #757575;
  }
`;

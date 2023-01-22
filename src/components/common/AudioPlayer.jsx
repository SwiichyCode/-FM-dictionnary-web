import React from "react";
import styled from "styled-components";
import { ButtonPlay } from "./ButtonPlay";

export const AudioPlayer = ({ data }) => {
  return (
    <Container>
      {data.map(({ word, phonetic }) => {
        return (
          <div>
            <h1>{word}</h1>
            <p>{phonetic}</p>
          </div>
        );
      })}
      <ButtonPlay />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    h1 {
      font-weight: 700;
      font-size: 32px;
      line-height: 41px;
      color: var(--color-dark-400);
    }

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: var(--color-purple);
    }
  }
`;

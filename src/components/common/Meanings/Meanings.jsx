import React from "react";
import styled from "styled-components";
import { DefinitionsList } from "./DefinitionsList";
import { Speech } from "./Speech";
import { SynonymsList } from "./SynonymsList";

export const Meanings = ({ data }) => {
  return (
    <Container>
      {data.map((item) => {
        return item.meanings.map((meaning) => {
          return (
            <article>
              <Speech meaning={meaning} />
              <DefinitionsList meaning={meaning} />
              <SynonymsList meaning={meaning} />
            </article>
          );
        });
      })}
    </Container>
  );
};

const Container = styled.section`
  color: ${({ theme }) => theme.globalText};

  article:last-child {
    border-bottom: 0.1rem solid var(--color-grey-500);
    padding-bottom: 3.2rem;
  }

  h4 {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: var(--color-grey);
  }
`;

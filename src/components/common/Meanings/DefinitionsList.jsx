import React from "react";
import styled from "styled-components";

export const DefinitionsList = ({ meaning }) => {
  return (
    <Container>
      <h4>Meaning</h4>
      <ul>
        {meaning.definitions.map((definition) => {
          return (
            <li>
              <p>{definition.definition}</p>
              {definition.example && <p>"{definition.example}"</p>}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  h4 {
    margin-bottom: 17px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    li {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1.3rem;

      &::before {
        position: absolute;
        content: "•";
        color: var(--color-purple);
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
        top: 0.6rem;
      }

      p {
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.color.globalText};

        &:nth-child(2) {
          color: var(--color-grey);
        }
      }
    }
  }
`;

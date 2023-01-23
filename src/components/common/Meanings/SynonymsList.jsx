import React from "react";
import styled from "styled-components";

export const SynonymsList = ({ meaning }) => {
  return (
    <>
      {meaning.synonyms.length > 0 && (
        <Container className="synonyms">
          <h4>Synonyms</h4>
          <ul>
            {meaning.synonyms.map((synonym) => {
              return (
                <li>
                  <p>{synonym}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      )}
    </>
  );
};

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 2.4rem;
  margin-bottom: 3.2rem;
  gap: 1rem;

  ul {
    display: flex;
    gap: 1rem;

    li {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: var(--color-purple);
    }
  }
`;

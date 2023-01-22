import React from "react";
import styled from "styled-components";

export const Meanings = ({ data }) => {
  console.log(data);
  return (
    <Container>
      {data.map((item) => {
        return item.meanings.map((meaning) => {
          return (
            <section>
              <div className="speech">
                <h3>{meaning.partOfSpeech}</h3>
                <div className="line"></div>
              </div>
              <div className="definitions">
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
              </div>
            </section>
          );
        });
      })}
    </Container>
  );
};

const Container = styled.div`
  color: var(--color-dark-400);

  section:last-child {
    border-bottom: 0.1rem solid var(--color-grey-500);
  }

  .speech {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
    margin: 3.2rem 0;

    h3 {
      font-style: italic;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.2rem;
    }

    .line {
      width: 100%;
      max-width: 26.6rem;
      height: 0.1rem;
      background: var(--color-grey-500);
    }
  }

  .definitions {
    ul {
      display: flex;
      flex-direction: column;
      gap: 1.3rem;

      li {
        display: flex;
        flex-direction: column;
        gap: 1.3rem;
        position: relative;

        &::before {
          position: absolute;
          content: "•";
          color: #8f19e8;
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
          top: 0.6rem;
        }

        p {
          font-weight: 400;
          font-size: 15px;
          line-height: 24px;
          color: #2d2d2d;
        }

        p:nth-child(2) {
          font-weight: 400;
          font-size: 15px;
          line-height: 24px;
          color: #757575;
          padding-bottom: 3.2rem;
        }
      }
    }
  }
`;

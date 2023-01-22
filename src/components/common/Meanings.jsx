import React from "react";
import styled from "styled-components";

export const Meanings = ({ data }) => {
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
                <label>Meaning</label>
                <ul>
                  {meaning.definitions.map((definition) => {
                    return (
                      <>
                        <li>
                          <p>{definition.definition}</p>
                          {definition.example && <p>"{definition.example}"</p>}
                        </li>
                      </>
                    );
                  })}
                </ul>
                {meaning.synonyms.length > 0 && (
                  <div className="synonyms">
                    <h4>Synonyms</h4>
                    <p>{meaning.synonyms}</p>
                  </div>
                )}
              </div>
            </section>
          );
        });
      })}
    </Container>
  );
};

const Container = styled.div`
  color: ${({ theme }) => theme.globalText};

  section:last-child {
    border-bottom: 0.1rem solid var(--color-grey-500);
  }

  .synonyms {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    margin-top: 2.4rem;

    h4 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #757575;
    }

    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #a445ed;
    }
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
      background: ${({ theme }) => theme.meaningLine};
    }
  }

  .definitions {
    label {
      display: block;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: #757575;
      margin-bottom: 17px;
    }

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
          color: ${({ theme }) => theme.globalText};
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

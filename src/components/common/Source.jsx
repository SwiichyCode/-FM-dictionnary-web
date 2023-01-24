import React from "react";
import styled from "styled-components";

export const Source = ({ data }) => {
  return (
    <Container>
      <h3>Source</h3>
      <ul>
        {data.map((item) => {
          return (
            <li>
              <a href={item.sourceUrls}>{item.sourceUrls}</a>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  gap: 0.8rem;
  text-decoration: underline;

  h3 {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #757575;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    a {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: ${({ theme }) => theme.color.globalText};
      text-decoration: none;
    }
  }
`;

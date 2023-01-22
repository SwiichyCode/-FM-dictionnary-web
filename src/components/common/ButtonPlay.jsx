import React from "react";
import styled from "styled-components";

export const ButtonPlay = () => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 75 75"
      >
        <g className="arrow" fill="currentColor" fill-rule="evenodd">
          <path d="M29 27v21l21-10.5z" />
        </g>
      </svg>
    </Container>
  );
};

const Container = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  border: none;
  background: var(--color-purple-200);
  color: var(--color-purple);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--color-white);
    fill: currentColor;
  }
`;

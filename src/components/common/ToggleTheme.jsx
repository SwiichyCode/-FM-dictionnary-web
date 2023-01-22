import React from "react";
import styled from "styled-components";
import { useThemeStore } from "../../stores/themeStore.js";

export const ToggleTheme = ({ isOn, handleToggle }) => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <Container>
      <StyledToggle>
        <input
          checked={isOn}
          onChange={toggleTheme}
          id="switch"
          type="checkbox"
        />
        <label htmlFor="switch">
          <span />
        </label>
      </StyledToggle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          stroke="#838383"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const StyledToggle = styled.div`
  position: relative;
  width: 100%;
  max-width: 4rem;
  display: flex;

  input {
    position: absolute;
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    position: relative;
    width: 4rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.toggleButton};
    border-radius: 100px;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    span {
      content: "";
      position: absolute;
      top: 3px;
      left: 4px;
      width: 14px;
      height: 14px;
      border-radius: 45px;
      transition: 0.2s;
      background: var(--color-white);
      box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }
  }

  input:checked + label span {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }
`;

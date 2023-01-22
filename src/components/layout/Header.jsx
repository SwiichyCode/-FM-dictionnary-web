import React from "react";
import styled from "styled-components";
import { Logo } from "../common/Logo";
import { Select } from "../common/Select";
import { ToggleTheme } from "../common/ToggleTheme";

export const Header = () => {
  return (
    <Container>
      <Logo />
      <Wrapper>
        <Select />
        <Line />
        <ToggleTheme />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const Line = styled.span`
  width: 2px;
  height: 3.2rem;
  background-color: var(--color-grey-500);
`;

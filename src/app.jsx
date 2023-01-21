import React from "react";
import styled from "styled-components";
import { Header } from "./components/layout/Header";

export const App = () => {
  return (
    <Container>
      <AppWrapper>
        <Header />
      </AppWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-white);
`;

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
  padding: var(--app-padding-mobile);
`;

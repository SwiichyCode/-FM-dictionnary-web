import React from "react";
import styled from "styled-components";
import { SearchField } from "./components/common/SearchField";
import { Header } from "./components/layout/Header";
import { ThemeLayout } from "./components/layout/ThemeLayout";
import { useSearchStore } from "./stores/searchStore";
import { useFetch } from "./hooks/useFetch";

export const App = () => {
  const query = useSearchStore((state) => state.search);
  const { data, status } = useFetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`,
    [query]
  );

  return (
    <ThemeLayout>
      <Container>
        <AppWrapper>
          <HeaderWrapper>
            <Header />
            <SearchField />
          </HeaderWrapper>
        </AppWrapper>
      </Container>
    </ThemeLayout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: var(--color-white); */
`;

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
  padding: var(--app-padding-mobile);
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

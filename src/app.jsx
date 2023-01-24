import React from "react";
import styled from "styled-components";
import { useSearchStore } from "./stores/searchStore";
import { useFetch } from "./hooks/useFetch";
import { ThemeLayout } from "./components/layout/ThemeLayout";
import { SearchField } from "./components/common/SearchField";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { NotFound } from "./components/common/NotFound";

export const App = () => {
  const query = useSearchStore((state) => state.search);
  const { data, status, loading, error } = useFetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/`,
    query
  );

  console.log(data);

  return (
    <ThemeLayout>
      <Container>
        <AppWrapper>
          <HeaderWrapper>
            <Header />
            <SearchField />
          </HeaderWrapper>
          {status === "fetched" && <Main data={data} />}
          {status === "error" && (
            <p>Une erreur est survenue. Veuillez réessayer plus tard.</p>
          )}
          {status === "wordNotFound" && <NotFound />}
        </AppWrapper>
      </Container>
    </ThemeLayout>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: transparent;
  padding: var(--app-padding-mobile);
  gap: 2.8rem;

  @media screen and (min-width: 768px) {
    padding: var(--app-padding-tablet);
    gap: 5rem;
    max-width: 73.2rem;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media screen and (min-width: 768px) {
    gap: 5.1rem;
  }
`;

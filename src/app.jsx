import React from "react";
import styled from "styled-components";
import { useSearchStore } from "./stores/searchStore";
import { useFetch } from "./hooks/useFetch";
import { ThemeLayout } from "./components/layout/ThemeLayout";
import { SearchField } from "./components/common/SearchField";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";

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
          {status === "wordNotFound" && <p>Nop</p>}
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
  /* background: var(--color-white); */
`;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: transparent;
  padding: var(--app-padding-mobile);
  gap: 2.8rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

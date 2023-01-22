import React from "react";
import styled from "styled-components";
import { useSearchStore } from "./stores/searchStore";
import { useFetch } from "./hooks/useFetch";
import { ThemeLayout } from "./components/layout/ThemeLayout";
import { SearchField } from "./components/common/SearchField";
import { Header } from "./components/layout/Header";
import { AudioPlayer } from "./components/common/AudioPlayer";
import { Meanings } from "./components/common/Meanings";
import { Source } from "./components/common/Source";

export const App = () => {
  const query = useSearchStore((state) => state.search);
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
  const { data, status } = useFetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/keyboard`,
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
          {/* {data.length > 0 && ( */}
          <MainWrapper>
            <AudioPlayer data={data} />
            <Meanings data={data} />
            <Source data={data} />
          </MainWrapper>
          {/* )} */}
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

const MainWrapper = styled.div``;

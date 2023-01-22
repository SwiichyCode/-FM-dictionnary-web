import styled from "styled-components";
import { AudioPlayer } from "../../components/common/AudioPlayer";
import { Meanings } from "../../components/common/Meanings";
import { Source } from "../../components/common/Source";

export const Main = ({ data }) => {
  return (
    <MainWrapper>
      <AudioPlayer data={data} />
      <Meanings data={data} />
      <Source data={data} />
    </MainWrapper>
  );
};

const MainWrapper = styled.div``;

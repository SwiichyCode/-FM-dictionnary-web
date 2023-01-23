import React from "react";
import styled from "styled-components";
import { ButtonPlay } from "./ButtonPlay";
import ReactAudioPlayer from "react-audio-player";

export const AudioPlayer = ({ data }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <Container>
      {data.map(({ word, phonetic, phonetics }) => {
        return (
          <div>
            <h1>{word}</h1>
            <p>{phonetic}</p>
            <ReactAudioPlayer
              src={phonetics.filter((item) => item.audio.length > 0)[0].audio}
              autoPlay={isPlaying}
              onEnded={() => setIsPlaying(false)}
              style={{ width: "0%", position: "absolute" }}
            />
          </div>
        );
      })}

      <ButtonPlay onClick={() => setIsPlaying(true)} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    h1 {
      font-weight: 700;
      font-size: 32px;
      line-height: 41px;
      color: ${({ theme }) => theme.globalText};
    }

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: var(--color-purple);
    }
  }
`;

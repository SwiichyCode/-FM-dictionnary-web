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

    @media screen and (min-width: 768px) {
      gap: 1.1rem;
    }

    h1 {
      font-weight: 700;
      font-size: 3.2rem;
      line-height: 4.1rem;
      color: ${({ theme }) => theme.globalText};

      @media screen and (min-width: 768px) {
        font-size: 6.4rem;
        line-height: 6.7rem;
      }
    }

    p {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.4rem;
      color: var(--color-purple);

      @media screen and (min-width: 768px) {
        font-size: 2.4rem;
        line-height: 2.9rem;
      }
    }
  }
`;

import { useRef, useEffect } from "react";

export const useAudio = (src) => {
  const audio = useRef(new Audio(src));

  //   useEffect(() => {
  //     audio.current.volume = volume;
  //   }, [volume]);

  //   useEffect(() => {
  //     audio.current.playbackRate = playbackRate;
  //   }, [playbackRate]);

  return audio.current;
};

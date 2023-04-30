import React, { useState } from "react";

const AudioButton = ({ preview }: any) => {
  const [audio, setAudio] = useState(new Audio(preview));

  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(!isPlaying);
    } else if (!isPlaying) {
      audio.play();
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <>
      <button onClick={playPause}>{isPlaying ? "Preview" : "Play"}</button>
    </>
  );
};

export default AudioButton;

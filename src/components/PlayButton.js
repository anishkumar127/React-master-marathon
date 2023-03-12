import "./PlayButton.css";
import { memo, useState } from "react";

const PlayButton = memo(function PlayButton({ message, children, onPlay, onPause }) {
  console.log("render PlayButton");

  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    e.stopPropagation();

    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  }

  return (
    <button onClick={handleClick}>
      {children} : {playing ? "⏸️" : "⏯️"}
    </button>
  );
})

export default PlayButton;

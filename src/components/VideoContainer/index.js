import React from "react";
import { Player, BigPlayButton } from "video-react";

import "./index.scss";

const VideoContainer = () => {
  return (
    <Player
      playsInline
      muted
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >
      <BigPlayButton position="top" />
    </Player>
  );
};

export default VideoContainer;

import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
export interface IVideoPlayerProps {
  src: string;
  poster: string;
  type: string;
}
const VideoPlayer: React.FC<IVideoPlayerProps> = (props) => {
  return (
    <div>
      {props.type == "youtube" && (
        <iframe
          width="421"
          height="242"
          src={props.src}
        ></iframe>
      )}
      {props.type !== "youtube" && (
        <Player playsInline poster={props.poster}>
          <source src={props.src} type={props.type} />
        </Player>
      )}
    </div>
  );
};

export default VideoPlayer;

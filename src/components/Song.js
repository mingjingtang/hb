import React from "react";
import "./Song.css";
import ReactAudioPlayer from "react-audio-player";

const Song = (props) => {
  return (
    <div className="player">
      <ReactAudioPlayer src={props.song} autoPlay controls />
    </div>
  );
};

export default Song;

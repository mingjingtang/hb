import React from "react";
import "../MainPage/MainPage.css";
import ReactAudioPlayer from "react-audio-player";
import soundfile from "../../resource/Takeaway.mp3";
import photo1 from "../../resource/photo1.jpg";
import { Image } from "semantic-ui-react";

export default class MainPage extends React.Component {
  render() {
    return (
      <div className="ui segment" style={{ height: "600px" }}>
        <div className="player">
          <ReactAudioPlayer src={soundfile} autoPlay controls />
        </div>
        <Image
          className="outside"
          style={{ height: "100%", width: "100%" }}
          src={photo1}
          alt="photo1"
        />
      </div>
    );
  }
}

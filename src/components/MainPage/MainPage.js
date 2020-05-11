import React from "react";
import "./MainPage.css";
import ReactAudioPlayer from "react-audio-player";
import soundfile from "../../resource/Takeaway.mp3";
import photo1 from "../../resource/photo1.jpg";
import { Image } from "semantic-ui-react";

export default class MainPage extends React.Component {
  render() {
    return (
      <div className="ui segment" style={{ height: "640px" }}>
        <div className="player">
          <ReactAudioPlayer src={soundfile} autoPlay controls />
        </div>

        <Image
          className="out"
          style={{ height: "100%", width: "100%" }}
          src={photo1}
          alt="photo1"
        />

        <div className="in">
          <div className="letter">
            妈妈： 母亲节快乐！
            <br />
            <span style={{ marginLeft: "1em" }} />
            那天跟任聊天，说到自由，任说自由都是相对的，一个人在某些方面的付出，才能让另一个人享受到自由。
            <br />
            <span style={{ marginLeft: "1em" }} />
            从小，我的衣食无忧，放假都可以在中国名山大川游走，都是你牺牲自己给我带来的幸福。
            <br />
            <span style={{ marginLeft: "1em" }} />
            因为有你这么伟大的母亲，所以我才可以一直以来有很好的价值观和人生观。在遇到困难和挫折时，勇敢面对和选择正确的道路。
            <br />
            <span style={{ marginLeft: "1em" }} />
            你一直说，你是我坚强的后盾，我现在也在努力，希望以后成为你坚强的后盾。能陪你渡过病痛与伤心，能让你拥有安全感，就像你一直对我这样！
            <br />
            <span style={{ marginLeft: "6em" }} />
            最爱你的女儿：蓉蓉
          </div>
        </div>
      </div>
    );
  }
}

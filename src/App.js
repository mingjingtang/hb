import React from "react";
import "./App.css";
import Cake from "./Cake";
import Song from "./Song";
import soundfile from "./resource/song.mp3";
import cakefile from "./resource/birthdayCake.gif";
import firstPic from "./resource/firstPic.jpg";

class App extends React.Component {
  state = {
    songTrackSource: null,
    cakeSource: null,
    show: false,
  };

  componentDidMount() {
    this.setState({ show: true });
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log("This has been clicked!");
    this.setState({
      songTrackSource: soundfile,
      cakeSource: (
        <div className="ui segment">
          <div className="ui fluid image">
            <img src={cakefile} alt="cakeImage" />
          </div>

          <div className="letter">
            <h5>
              妈妈：
              <br />
              <span style={{ marginLeft: "1em" }} /> 生日快乐！
              <br />
              <span style={{ marginLeft: "1em" }} />
              没想到时间这么快，你就58岁了！真希望能和你一起庆祝生日，和其他在长沙的亲戚和朋友一样。
              <br /> <span style={{ marginLeft: "1em" }} />
              虽然不能陪在你身边，但希望你能感受到我的祝福。
              <br /> <span style={{ marginLeft: "10em" }} />
              爱你的女儿❤️
            </h5>
          </div>
        </div>
      ),

      show: false,
    });
  };

  showButton = () => {
    if (this.state.show) {
      return (
        <div className="ui segment" style={{ display: "block" }}>
          <button className="ui orange button" onClick={this.handleClick}>
            点我!
          </button>
          <img
            className="ui centered image"
            src={firstPic}
            alt="monAndDaughter"
          />
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="ui container">
        {this.showButton()}

        <div>
          <Song song={this.state.songTrackSource} />
          <Cake cake={this.state.cakeSource}></Cake>
        </div>
      </div>
    );
  }
}
export default App;

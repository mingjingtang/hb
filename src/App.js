import React from "react";
import "./App.css";
import Cake from "./Cake";
import Song from "./Song";
import soundfile from "./resource/song.mp3";
import cakefile from "./resource/birthdayCake.gif";

class App extends React.Component {
  state = {
    songTrackSource: null,
    cakeSource: null,
    words: "",
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
      cakeSource: cakefile,
      words: (
        <div className="text">
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
      ),
      show: false,
    });
  };

  showButton = () => {
    if (this.state.show) {
      return (
        <button className="ui pink button" onClick={this.handleClick}>
          点我!
        </button>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="backgroud">
        {this.showButton()}

        <div className="later">
          <Song song={this.state.songTrackSource} />
          <Cake cake={this.state.cakeSource} words={this.state.words}></Cake>
        </div>
      </div>
    );
  }
}
export default App;

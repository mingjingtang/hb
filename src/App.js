import React from "react";
import Cake from "./Cake";
import Song from "./Song";
import soundfile from "./resource/song.mp3";
import cakefile from "./resource/cake.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.state = {
      song: "",
      cake: "",
    };
  }

  onClickEvent = (e) => {
    e.preventDefault();
    console.log("This has been clicked!");
    this.setState({ song: soundfile, cake: cakefile });
  };

  render() {
    return (
      <div>
        <button onClick={this.onClickEvent}>Click this!</button>
        <Cake ref={this.myRef} src={this.state.cake} autoPlay />
        <Song song={this.state.song} />
      </div>
    );
  }
}
export default App;

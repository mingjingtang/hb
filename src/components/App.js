import React from "react";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import flower from "../resource/page1-bg.jpg";
import Typewriter from "typewriter-effect";
import { Image } from "semantic-ui-react";

class App extends React.Component {
  state = {
    show: false,
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log("This has been clicked!");
    this.setState({
      show: true,
    });
  };

  render() {
    const renderContent =
      this.state.show === false ? (
        <div className="ui segment" style={{ height: "600px" }}>
          <Image
            className="outside"
            style={{ height: "100%", width: "100%" }}
            src={flower}
            alt="flower"
          />
          <div className="inside" onClick={this.handleClick}>
            <div className="content">
              <Typewriter
                options={{
                  strings: ["点击我，有惊喜"],
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("点击我，有惊喜")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(4500)
                    .start();
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <MainPage />
      );

    return (
      <main className="main">
        <div className="ui container">
          <div className="column">{renderContent}</div>
        </div>
      </main>
    );
  }
}
export default App;

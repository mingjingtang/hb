import React from "react";

const Cake = (props) => {
  return (
    <div>
      <img src={props.cake} alt="cakeImage" />
      {props.words}
    </div>
  );
};

export default Cake;

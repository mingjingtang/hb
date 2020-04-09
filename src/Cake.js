import React from "react";

const Cake = (props) => {
  return (
    <div>
      <img src={props.cake} />
      {props.words}
    </div>
  );
};

export default Cake;

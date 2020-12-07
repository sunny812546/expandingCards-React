import React from "react";

const Panel = ({ url, index, isActive, componentChangeStateHandler }) => {
  const activeClassHandler = (e) => {
    componentChangeStateHandler(index);
  };
  return (
    <div
      className={"panel" + (isActive ? " active" : "")}
      style={{
        backgroundImage: "url(" + url + ")",
      }}
      onClick={activeClassHandler}
    >
      <p>Vegas</p>
    </div>
  );
};

export default Panel;

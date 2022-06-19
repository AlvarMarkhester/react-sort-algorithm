import React from "react";

const SortInputs = (props) => {
  return (
    <div className="graph-input">
      <label>Number of elements:</label>
      <input
        value={props.numberOfElements}
        onChange={props.handleElementChange}
      ></input>
      <label>Speed/iteration (ms):</label>
      <input
        value={props.speed}
        onChange={props.handleSpeedChange}
        ></input>
      <button onClick={props.bubbleSort} style={{ marginTop: 10 }}>Sort</button>
    </div>
  );
};

export default SortInputs;

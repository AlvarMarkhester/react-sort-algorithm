import React, { useState } from "react";

const SortInputs = (props) => {
  const [sortMethod, setSortMethod] = useState('bubble');

  const handleElementChange = (event) => {
    if (isNaN(event.target.value)) return;
    props.setNumberOfElements(event.currentTarget.value);
  };

  const handleSpeedChange = (event) => {
    if (isNaN(event.target.value)) return;
    props.setSpeed(event.currentTarget.value);
  };

  const handleSortChange = (event) => {
    setSortMethod(event.currentTarget.value)
  }

  const handleReset = () => {
    props.setNumberOfElements(Math.floor(Math.random() * 100) + 20);
  };

  return (
    <div className="graph-input">
      <label>Number of elements:</label>
      <input
        value={props.numberOfElements}
        onChange={handleElementChange}
      ></input>
      <label>Speed/iteration (ms):</label>
      <input value={props.speed} onChange={handleSpeedChange}></input>
      <label>Select sorting method:</label>
      <select value={sortMethod} onChange={handleSortChange}>
        <option value={'bubble'}>Bubble Sort</option>
        <option value={'merge'}>Merge Sort</option>
        <option value={'quick'}>Quick Sort</option>
      </select>
      <button onClick={() => props.toggleSort(sortMethod)} style={{ marginTop: 10 }}>
        Sort
      </button>
      <button onClick={handleReset} style={{ marginTop: 10 }}>
        Reset
      </button>
    </div>
  );
};

export default SortInputs;

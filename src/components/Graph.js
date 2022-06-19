import React, { useEffect, useState } from "react";
import SortInputs from "./SortInputs";
import ArrayVisualizer from "./ArrayVisualizer";

const Graph = () => {
  const [numberOfElements, setNumberOfElements] = useState(50);
  const [speed, setSpeed] = useState(100);

  const [elementArray, setElementArray] = useState([]);

  function updateArray(elements) {
    var array = [];
    for (var i = 0; i < elements; i++) {
      array.push({ value: Math.floor(Math.random() * 500), id: i });
    }
    setElementArray(array);
  }

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  async function bubbleSort() {
    var tempArr = [...elementArray];
    for (var i = 0; i < tempArr.length; i++) {
      for (var j = 0; j < tempArr.length - i - 1; j++) {
        if (tempArr[j].value > tempArr[j + 1].value) {
          var b = tempArr[j];
          tempArr[j] = tempArr[j + 1];
          tempArr[j + 1] = b;
          setElementArray([...tempArr]);
          await timer(speed);
        }
      }
    }
  }

  const handleElementChange = (event) => {
    if (typeof event.currentTarget.value === "number") {
      setNumberOfElements(event.currentTarget.value);
    }
  };

  const handleSpeedChange = (event) => {
    if (typeof event.currentTarget.value === "number") {
      setSpeed(event.currentTarget.value);
    }
  };
  
  useEffect(() => {
    updateArray(numberOfElements);
  }, [numberOfElements]);

  return (
    <div className="graph-container">
      <div className="graph-div">
        <SortInputs
          numberOfElements={numberOfElements}
          handleElementChange={handleElementChange}
          speed={speed}
          handleSpeedChange={handleSpeedChange}
          bubbleSort={bubbleSort}
        />
        <ArrayVisualizer elementArray={elementArray} />
      </div>
    </div>
  );
};

export default Graph;

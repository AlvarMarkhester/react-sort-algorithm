import React, { useState } from "react";
import SortInputs from "./SortInputs";
import ArrayVisualizer from "./ArrayVisualizer";
import useArraySetup from "./Helpers/useArraySetup";
import useBubbleSort from "./Helpers/useBubbleSort";

const Graph = () => {
  const [numberOfElements, setNumberOfElements] = useState(
    Math.floor(Math.random() * 100) + 20
  );
  const [speed, setSpeed] = useState(100);
  const [elementArray, setElementArray] = useArraySetup(numberOfElements);
  const [bubbleSorting, setBubbleSorting] = useBubbleSort(
    elementArray,
    setElementArray,
    speed
  );

  const toggleSort = (type) => {
    switch (type) {
      case "bubble":
        setBubbleSorting(bubbleSorting => !bubbleSorting)
        break;
      case "merge":
        console.log('merge')
        break;
      case "quick":
        console.log('quick')
        break;
      default:
        throw new Error();
    }
  };

  return (
    <div className="graph-container">
      <div className="graph-div">
        <SortInputs
          numberOfElements={numberOfElements}
          setNumberOfElements={setNumberOfElements}
          speed={speed}
          setSpeed={setSpeed}
          toggleSort={toggleSort}
        />
        <ArrayVisualizer elementArray={elementArray} />
      </div>
    </div>
  );
};

export default Graph;

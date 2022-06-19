import React from "react";

const ArrayVisualizer = (props) => {
  return (
    <div className="array-container">
      <div className="graph">
        {props.elementArray.map((element) => {
          return (
            <div key={element.id} className="graph-element" style={{ height: element.value }}></div>
          );
        })}
      </div>
    </div>
  );
};

export default ArrayVisualizer;

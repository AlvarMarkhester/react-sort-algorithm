import { useEffect, useState } from "react";

export const useBubbleSort = (elementArray, setElementArray, speed) => {
  const [bubbleSorting, setBubbleSorting] = useState(false);
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const bubbleSort = async () => {
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
    };
    if (bubbleSorting) {
      bubbleSort();
      setBubbleSorting(false);
    }
  }, [bubbleSorting, elementArray, setElementArray, speed]);

  return [bubbleSorting, setBubbleSorting];
};

export default useBubbleSort;

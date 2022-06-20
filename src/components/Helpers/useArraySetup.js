import { useEffect, useState } from "react";

const useArraySetup = (elements) => {
  const [elementArray, setElementArray] = useState([]);

  useEffect(() => {
    var array = [];
    for (var i = 0; i < elements; i++) {
      array.push({ value: Math.floor(Math.random() * 500), id: i });
    }
    setElementArray(array);
  }, [elements]);

  return [elementArray, setElementArray];
};

export default useArraySetup;

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

const bubbleSort = async (elementArray, setElementArray, speed) => {
    var tempArr = [...elementArray];
    for (var i = 0; i < tempArr.length; i++) {
        for (var j = 0; j < tempArr.length - i - 1; j++) {
            if (tempArr[j].value > tempArr[j + 1].value) {
                var b = tempArr[j];
                tempArr[j] = tempArr[j + 1];
                tempArr[j + 1] = b;
                setElementArray([...tempArr]);
                if (speed > 0)
                    await timer(speed);
            }
        }
    }
};

export default bubbleSort;

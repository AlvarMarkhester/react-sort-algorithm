// Array[e] = {value: x, id: id}
// [7,4,2,3,2,1]
// [2,4,4] [1,2,3]
// [1, 2, 2,3, 4,4 ]
// [4,7] [2] [3] [2,1]

const mergeSort = (stateArr, setArr) => {
    if (stateArr.length > 1) {
        const currentArray = [...stateArr];
        sort(currentArray, 0, currentArray.length, setArr);
    }
};

const sort = (arr, start, end, setArr) => {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        sort(arr, start, mid, setArr);
        sort(arr, mid + 1, end, setArr);
        merge(arr, start, mid, end, setArr);
    }
};

const merge = (arr, start, mid, end, setArr) => {
    let tempArr = [];
    let L = start;
    let R = mid + 1;
    let M = 0;

    while (L <= mid && R <= end) {
        if (arr[L].value <= arr[R].value) {
            tempArr[M] = arr[L];
            L++;
        } else {
            tempArr[M] = arr[R];
            R++;
        }
        M++;
    }

    while (L <= mid) {
        tempArr[M] = arr[L];
        M++;
        L++;
    }
    while (R <= end) {
        tempArr[M] = arr[R];
        M++;
        R++;
    }
};

export default mergeSort;

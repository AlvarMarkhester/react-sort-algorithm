
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
    let temparr = []
    let L = start;
    let R = mid + 1;
    let M = 0;

    while (L <= mid && R <= end) {
        if (arr[L].value <= arr[R].value) {
            temparr[M] = arr[L];
            L++;
        } else {
            temparr[M] = arr[R];
            R++;
        }
        M++;
    }

    while (L <= mid) {
        temparr[M] = arr[L];
        setArr(arr)
        M++;
        L++;
    }
    while (R <= end) {
        temparr[M] = arr[R];
        setArr(arr)
        M++;
        R++;
    }
    console.log(temparr)
};

export default mergeSort;

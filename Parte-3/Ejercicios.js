const range = (start, end, step = 1) => {
    if (step < 0) {
        step = 1;
    }
    const arr = [];
    for (let i = start; i <= end; i += step) {
        arr.push(i);
    }
    return arr;
}

const sum = (arr) => {
    const arrSize = arr.length;
    let result = 0;
    for (number of arr) {
        result += number;
    }
    return result;
}

const reverseArray = (arr) => {
    const newArray = [];
    const arrSize = arr.length;
    for (let i = arrSize - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}

const reverseArrayInPlace = (arr) => {
    const arrSize = arr.length;
    for (let i = 0; i < arrSize / 2; i++) {
        const temp = arr[i];
        arr[i] = arr[arrSize - 1 - i];
        arr[arrSize - 1 - i] = temp;
    }
    return arr;
}

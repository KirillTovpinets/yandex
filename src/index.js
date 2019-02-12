function bubbleSort(array) {
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 1; j < length - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    return array;
}

function shakerSort(array) {
    let right = array.length - 1;
    let left = 0;

    while (left < right) {
        for (let i = left; i < right; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        left++;
        for (let i = right; i > left; i--) {
            if (array[i] < array[i - 1]) {
                let temp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = temp;
            }
        }
        right--;
    }
    return array;
}

function merge(left, right) {
    let result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right);
}
function mergeSort(array) {
    const data = array;
    if (data.length < 2) {
        return data;
    }
    let middle = Math.floor(data.length / 2);

    let left = data.slice(0, middle);
    let right = data.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function quickSort(array) {
    const data = array;
    if ( data.length < 2) {
        return data;
    }

    const base = data[0];
    const left = [];
    const right = [];

    for (let i = 1; i < data.length; i++) {
        if (data[i] < base) {
            left.push(data[i]);
        } else {
            right.push(data[i]);
        }
    }
    return quickSort(left).concat(base).concat(quickSort(right));
}
module.exports = {
    bubbleSort,
    shakerSort,
    mergeSort,
    quickSort
}
const assert = require('assert');
const { bubbleSort, shakerSort, mergeSort, quickSort } = require('./src');

describe('Bubble sort function', () => {
    it('should sort an array', () => {
        const array = [7, 4, 7, 2 ,6 ,23, 12, 11, 9, 3, 9, 8, 7, 6, 5, 3];
        assert.equal(array.sort(), bubbleSort(array));
    })
})
describe('Shaker sort function', () => {
    it('should sort an array', () => {
        const array = [7, 41, 9, 2 ,1 ,33, 15, 11, 6, 3, 9, 8, 7, 6, 5, 3];
        assert.equal(array.sort(), shakerSort(array));
    })
})
describe('quickSort sort function', () => {
    it('should sort an array', () => {
        const array = [7, 41, 9, 2 ,1 ,33, 15, 11, 6, 3, 9, 8, 7, 6, 5, 3];
        assert.equal(array.sort((a, b) => a - b).join(''), quickSort(array).join(''));
    })
})
describe('Merge sort function', () => {
    it('should sort an array', () => {
        const array = [7, 41, 9, 2 ,1 ,33, 15, 11, 9, 3, 9, 8, 7, 6, 5, 3];
        assert.equal(array.sort((a, b) => a - b).join(''), mergeSort(array).join(''));
    })
    it('should sort an array', () => {
        const array = [50, 22, 10, 30, 15, 2, 1, 5, 9];
        assert.equal(array.sort((a, b) => a - b).join(''), mergeSort(array).join(''));
    })
})
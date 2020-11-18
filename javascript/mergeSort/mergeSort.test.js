


const mergeSort = require('./mergeSort');

describe('Testing for merge sort', () => {
  test('Sorting of the array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(mergeSort(arr)).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
});


function insertionSortReverse(array) {
    for (let i = array.length - 2; i >= 0; i--) {
        let key = array[i];
        let j = i + 1;
        while (j <= array.length - 1 && key > array[j]) {
            array[j - 1] = array[j];
            j++;
        }
        array[j - 1] = key;
    }
    return array;
}

module.exports = { insertionSortReverse };


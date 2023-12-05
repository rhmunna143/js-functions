function sortMaker(arr) {
    if (arr.length !== 2) {
        return "The array must have exactly two elements.";
    } else if(arr[0] < 0 || arr[1] < 0) {
        return 'Invalid Input';
    } else if(typeof arr[0] != 'number' || typeof arr[1] != 'number') {
        return 'You have to provide the array of number.'
    } else {
        if (arr[0] > arr[1]) {
            const arr2 = [arr[0], arr[1]];
            return arr2;
        } else if (arr[0] < arr[1]) {
            const arr3 = [arr[1], arr[0]];
            return arr3;
        } else {
            return "equal";
        }
    }
}

function cubeNumber(number) {
    if(typeof number != 'number'){
        return 'Invalid!!! Please Enter a number...';
    } else {
        const cube = number * number * number;
        return cube;
    }
}

function matchFinder(string1, string2) {
    if(typeof string1 != 'string' || typeof string2 != 'string') {
        return 'Invalid!!! Give two string...';
    } else {
        if(string1.toLocaleLowerCase().includes(string2.toLocaleLowerCase())) {
            return 'true';
        } else {
            return 'false';
        }
    }
}

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

function findAddress(obj) {
    if (typeof obj !== "object" || obj === null) {
        return 'Input must be a object with property and value.';
    }

    const properties = Object.keys(obj);
    const values = [];

    for (let i = 0; i < 3; i++) {
        const property = properties[i];
        values.push(obj[property] || "__");
    }

    return values.join(', ');
}

function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0) {
        return 'Invalid!!! Provide a valid array With Elements.';
    } else {
        let totalCost = 0;
        for(let i = 0; i < changeArray.length; i++) {
            totalCost += changeArray[i];
        }

        if(totalCost > totalDue) {
            return 'true';
        } else {
            return 'false';
        }
    }
}
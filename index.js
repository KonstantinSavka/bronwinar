// VARIABLES

let arrSize;
let sortingArray;

// FUNCTIONS

// Getting quantity of array elms
function getQt(quantity = +prompt('Enter quantity', 5)) {
    return checkQt(quantity);
};

// Quantity validation
function checkQt(quantity) {
    do {
        if (isNaN(quantity) || !quantity || quantity < 5 || quantity > 20) {
            alert('Repeat please');
            quantity = +prompt('Enter quantity again', 5);
        } else {
            return quantity;
        }
    } while (!quantity);
    return quantity;
};

// Array pusher
function pusher(arrSize) {
    let numbers = [];
    for (let i = 0; i < arrSize; i++) {
        numbers.push(checkNum(+prompt(`Enter number ${i + 1}`)));
    }
    return numbers;
};

// Array entered numbers validation
function checkNum(number) {
    do {
        if (isNaN(number)) {
            alert('Repeat please');
            number = +prompt('Enter number again', 1);
        } else {
            return number;
        }
    } while (!number);
    return number;
};

//(Bubble sorting method) 
function sorter(sortingArray) {
    let length = sortingArray.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (sortingArray[j + 1] < sortingArray[j]) {
                let t = sortingArray[j + 1];
                sortingArray[j + 1] = sortingArray[j];
                sortingArray[j] = t;
            }
        }
    }
    return sortingArray;
}

// Show results
function showSortedArr(sortingArray) {
    sortingArray.forEach((item, index) => {
        console.log([index], item);
    });
}

// ACTION

arrSize = getQt();
sortingArray = pusher(arrSize);
sorter(sortingArray);
showSortedArr(sortingArray);
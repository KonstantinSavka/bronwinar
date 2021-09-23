// VARIABLES
let operation;
let arrSize;

let finals = {};


// FUNCTIONS

// Get option 

function getOption(
    curOption = +prompt(`Choose operation:
     1 - increase/descend
     2 - evens/odds
     3 - sum/average/max/min`)
) {
    return checkOption(curOption);
};

// Option validation

function checkOption(curOption) {
    do {
        if (isNaN(curOption) || curOption > 3 || curOption < 1) {
            alert('Repeat please');
            curOption = +prompt(`Choose correct operation:
         1 - increase/descend
         2 - evens/odds
         3 - sum/average/max/min`);
        } else {
            return curOption;
        }
    } while (!operation);
    return curOption;
};

// Getting quantity of array elms
function getQt(quantity = +prompt('Enter quantity', 3)) {
    return checkQt(quantity);
};

// Quantity validation
function checkQt(quantity) {
    do {
        if (isNaN(quantity) || !quantity || quantity < 3) {
            alert('Repeat please');
            quantity = +prompt('Enter quantity again', 3);
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
    };
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

//(Bubble sorting method (INCREASE)) 
function sorter(sortingArray) {
    let length = sortingArray.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (sortingArray[j + 1] < sortingArray[j]) {
                let t = sortingArray[j + 1];
                sortingArray[j + 1] = sortingArray[j];
                sortingArray[j] = t;
            };
        };
    };
    return sortingArray;
};

// Evens alternate filter

function evens(sortingArray) {
    for (let x = 0; x < sortingArray.length; x++) {
        if (sortingArray[x] % 2 == 0) {
            finals['evensArray'].push(sortingArray[x]);
        }
    };
};

// Odds alternate filter

function odds(sortingArray) {
    for (let x = 0; x < sortingArray.length; x++) {
        if (sortingArray[x] % 2 != 0) {
            finals['oddsArray'].push(sortingArray[x]);
        }
    };
};

// Summary

function sum(sortingArray) {
    for (let x = 0; x < sortingArray.length; x++) {
        finals['summary'] += sortingArray[x];
    };
};

// Average

function average(sortingArray) {
    var localSum = 0;
    for (let x = 0; x < sortingArray.length; x++) {
        localSum += sortingArray[x];
    }

    return localSum / sortingArray.length;
}

// Repeat

function repeat() {
    let escaper = confirm('Want to repeat calculations?');
    if (escaper) {
        console.clear();
    } else {
        return false;
    };
    let answer = confirm('Want to repeat with same arr?');
    if (answer) {
        return true;
    } else {
        arrSize = getQt();
        finals['sortingArray'] = pusher(arrSize);
        return true;
    }
};

function action() {
    arrSize = getQt();
    finals['sortingArray'] = pusher(arrSize);

    do {
    
        operation = getOption();
    
        switch (operation) {
            case 1: {
                finals['increasing'] = sorter(finals['sortingArray']);
            
                finals['arrCopy'] = [...finals['increasing']];
            
                finals['descending'] = finals['arrCopy'].reverse();
    
                console.log(`
                increasing ${finals['increasing']}
                descending ${finals['descending']}`);
            }
            break;
            case 2: {
                finals['evensArray'] = finals['sortingArray'].filter(function (i) {
                    return i % 2 == 0;
                });
            
                finals['oddsArray'] = finals['sortingArray'].filter(function (i) {
                    return i % 2 != 0;
                });
    
                console.log(`
                evens ${finals['evensArray']}
                odds ${finals['oddsArray']}`);
            }
            break;
            case 3: {
                
                finals['summary'] = 0;
    
                sum(finals['sortingArray']);
            
                finals['averageNum'] = average(finals['sortingArray']);
            
                finals['biggestNum'] = Math.max(...finals['sortingArray']);
            
                finals['smallestNum'] = Math.min(...finals['sortingArray']);
    
                console.log(`
                average ${finals['averageNum']}
                the biggest ${finals['biggestNum']}
                the smallest ${finals['smallestNum']}`);
            }
            break;
            default: 
                alert('Incorrect option');
            };
    
    } while (repeat());
}

// ACTION

action();

alert('Так и не понял где задействовать разделитель(')
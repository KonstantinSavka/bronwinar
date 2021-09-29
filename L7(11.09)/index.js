let studArr = studentsMock['getStudentList'](15);
let newStud = studentsMock['getStudent']();
let firingStud;

// Average mark calc

function average(marks) {
    let sum = 0;
    marks.forEach(function(item){
        sum += item;
    });
    return sum/marks.length;
};

// Median calc

function findMedian(marks) {
    let median, medianRepeats = 0;
    for(let c1 = 0; c1 < marks.length; c1++) {
        let repeats = 0;
        for(let c2 = 0; c2 < marks.length; c2++) {
            if(marks[c1] === marks[c2]) {
                repeats++;
                if(repeats > medianRepeats) {
                    medianRepeats = repeats;
                    median = marks[c1];
                }
            }
        }
    };
    return median;
}

// Add stud new props

function modifyStud(stud) {
    stud['average'] = average(stud.marks);
    stud['median'] = findMedian(stud.marks);
    return stud;
}

// Firing student func

function fire(arr) {
    return arr.filter(function (item) {
        if(item['average'] < 50){
            return item;
        };
    });
}

// Refresh stud arr 

function updateOrigin(arr) {
    arr.map(function(item){
        modifyStud(item);
    });
}

// Add new stud func

function addNewStud(arr) {
    newStud['marked'] = '^^';
    arr.push(
        modifyStud(newStud)
    )
}

// Sorting by increase 

function increaseSort(arr) {
    return arr.sort(function (a, b) {
        if (a['average'] < b['average']) {
          return 1;
        }
        if (a['average'] > b['average']) {
          return -1;
        }
        return 0;
    });
}

// Final result

function result(arr) {
    arr.forEach(function(item){
        console.log(item['name'] + ' ' + item['average']);
    });
}

// ACTION

updateOrigin(studArr);

addNewStud(studArr);

firingStud = fire(studArr);

increaseSort(studArr);

result(studArr);

console.log(firingStud);
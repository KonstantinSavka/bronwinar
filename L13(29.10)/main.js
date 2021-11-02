
// FUNCTIONS

function Student(name = '', faculty = '', marks = '') {
    this.name = name;
    this.faculty = faculty;
    this.marks = marks;
};

function getMaxMark() {
    return Math.max(...this.marks);
}

function getMinMark() {
    return Math.min(...this.marks);
}

function getTotal() {
    return this.marks.reduce(function(a, b) { return a + b}, 0);
}

function getAvgMark() {
    return (this.marks.reduce(function(a, b) { return a + b}, 0)) / this.marks.length;
}

function getInfo() {
    return `${this.name}, ${this.faculty}, ${this.total()}`;
}

// VARIABLES 

const marks = [1, 2, 3, 4, 5];
const student = new Student('Orwell', 'history', marks);

// ASSIGNING

student.max = getMaxMark;
student.min = getMinMark;
student.total = getTotal;
student.avg = getAvgMark;
student.info = getInfo;

// ACTION 

student.max();
student.min();
student.total();
student.avg();
student.info();

alert(`Use one of the following commands in console: 
console.log(student.max())
console.log(student.min())
console.log(student.total())
console.log(student.avg())
console.log(student.info())
console.log(student.marks)`)
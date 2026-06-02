// TODO: Create a global variable called globalCount
let globalCount = 0;

// TODO: Create a function that demonstrates local scope
function demonstrateLocalScope() {
    let localCount = 10; // Changed var to let
    console.log("Inside local function - localCount:", localCount);
    console.log("Inside local function - globalCount:", globalCount);
}

// TODO: Create a function that tries to modify both variables
function modifyVariables() {
    let localCount = 20; 
    globalCount = 50;
    console.log("Inside modifyVariables - localCount:", localCount);
    console.log("Inside modifyVariables - globalCount:", globalCount);
}

/// TODO: Create a Student constructor function
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// TODO: Create several student instances
const student1 = new Student("Alice", 20);
const student2 = new Student("Bob", 22);
const student3 = new Student("Charlie", 21);

// TODO: Create an object literal with nested properties
var university = {
    name: "UWC",
    location: "Cape Town",
    students: [student1, student2, student3],
    staff: {
        "Head of department": "Mr Khan",
        "lecturers": ["Mrs Davids", "Mr Lee", "Mr Johnson"] 
    }
};
console.log(university.name)
console.log(university.students)
console.log(university.staff)
console.log(university.staff["Head of department"])
console.log(university.staff.lecturers)
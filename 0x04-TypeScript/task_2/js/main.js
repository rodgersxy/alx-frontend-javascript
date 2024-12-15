var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
var director = createEmployee(1000);
executeWork(director);
var teacher = createEmployee(200);
executeWork(teacher);
// Example usage
// console.log(createEmployee(200) instanceof Teacher); 
// console.log(createEmployee(1000) instanceof Director); 
// console.log(createEmployee("500") instanceof Director); 
// // Verifying the methods
// const teacher = createEmployee(200);
// console.log(teacher.workFromHome()); 
// console.log(teacher.getCoffeeBreak()); 
// console.log(teacher instanceof Teacher); 
// const director = createEmployee(1000);
// console.log(director.workFromHome()); 
// console.log(director.getCoffeeBreak()); 
// console.log(director instanceof Director); // true

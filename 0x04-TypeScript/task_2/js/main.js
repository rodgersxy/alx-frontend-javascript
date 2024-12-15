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
// Example usage
console.log(createEmployee(200) instanceof Teacher); // true
console.log(createEmployee(1000) instanceof Director); // true
console.log(createEmployee("$500") instanceof Director); // true
// Verifying the methods
var teacher = createEmployee(200);
console.log(teacher.workFromHome()); // Cannot work from home
console.log(teacher.getCoffeeBreak()); // Cannot have a break
console.log(teacher instanceof Teacher); // true
var director = createEmployee(1000);
console.log(director.workFromHome()); // Working from home
console.log(director.getCoffeeBreak()); // Getting a coffee break
console.log(director instanceof Director); // true

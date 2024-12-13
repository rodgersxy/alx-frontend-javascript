var printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + ". " + lastName;
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// usage
// const director1: Directors = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullTimeEmployee: true,
//     numberOfReports: 17,
//     location: 'Nairobi',
//     contract: false,
//     yearsOfExperience: 5,
// };
// console.log(director1);
// console.log(printTeacher('John', 'Doe'));
var student1 = new StudentClass('John', 'Doe');
console.log(student1.workOnHomework());
console.log(student1.displayName());

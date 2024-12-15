"use strict";
exports.__esModule = true;
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
var Cpp_1 = require("../subjects/Cpp");
var Java_1 = require("../subjects/Java");
var React_1 = require("../subjects/React");
// Create and export constants for the subjects
exports.cpp = new Cpp_1.Cpp();
exports.java = new Java_1.Java();
exports.react = new React_1.React();
// Create and export a Teacher object
exports.cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10
};
// Cpp Subject
console.log('C++');
exports.cpp.setTeacher(exports.cTeacher);
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
// Java Subject
console.log('Java');
exports.java.setTeacher(exports.cTeacher);
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
// React Subject
console.log('React');
exports.react.setTeacher(exports.cTeacher);
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher());

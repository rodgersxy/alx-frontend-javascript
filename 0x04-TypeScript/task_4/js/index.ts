import { Cpp } from '../subjects/Cpp';
import { React } from '../subjects/React';
import { Java } from '../subjects/Java';
import { Teacher } from '../subjects/Teacher';

const cpp = new Cpp();
const react = new React();
const java = new Java();

const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
};

cpp.setTeacher = teacher;
react.setTeacher = { ...teacher, experienceTeachingReact: 5 };
java.setTeacher = { ...teacher, experienceTeachingJava: 2 };

console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

/// <reference path="../subjects/Cpp.ts" />
/// <reference path="../subjects/React.ts" />
/// <reference path="../subjects/Java.ts" />
/// <reference path="../subjects/Teacher.ts" />

const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

// Define a teacher object
const teacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
};

// Set teachers for each subject
cpp.setTeacher({ ...teacher, experienceTeachingC: 10 });
react.setTeacher({ ...teacher, experienceTeachingReact: 5 });
java.setTeacher({ ...teacher, experienceTeachingJava: 2 });

// Log results for each subject
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

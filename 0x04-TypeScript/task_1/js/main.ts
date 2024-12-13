interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

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
console.log(printTeacher('John', 'Doe'));
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): (Director | Teacher) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

type Employee = Director | Teacher;

function isDirector(employee: Employee): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

const director = createEmployee(1000);
executeWork(director);

const teacher = createEmployee(200);
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
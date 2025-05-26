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

class DirectorClass implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class TeacherClass implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

const createEmployee = (salary: number | string): TeacherInterface | DirectorInterface => {
    if (typeof salary === "number" && salary < 500) {
        return new TeacherClass();
    } else {
        return new DirectorClass();
    }
}


// Creating functions specific to employees

const isDirector = (employee: TeacherInterface | DirectorInterface): employee is DirectorInterface => {
    return employee instanceof DirectorClass;
}

const executeWork = (employee: TeacherInterface | DirectorInterface): string => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): string => {
    if(todayClass === "Math") {
        return "Teaching Math";
    }else{
        return "Teaching History";
    }
}
interface Teacher{
    readonly firstName: string;   //This would make sure that the firstName and lastName cannot be modified(Overwritten) after the first creation of it. 
    readonly lastName: string;
    fullTime: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher{
    numberOfReports: number;
}


const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    yearsOfExperience: 10,
    fullTime: true,
    contract: false,
}

const director1: Directors = {
    firstName: "Ali",
    lastName: "Herdman",
    location: "Nigeria",
    fullTime: true,
    numberOfReports: 17
}

interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`
}

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface for the class instance
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the interface
class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
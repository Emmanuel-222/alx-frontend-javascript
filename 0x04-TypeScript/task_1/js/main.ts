interface Teacher{
    readonly firstName: string;   //This would make sure that the firstName and lastName cannot be modified(Overwritten) after the first creation of it. 
    readonly lastName: string;
    fullTime: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    yearsOfExperience: 10,
    fullTime: true,
    contract: false,
}
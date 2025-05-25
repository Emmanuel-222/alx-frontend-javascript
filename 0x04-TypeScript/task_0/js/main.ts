// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Ade",
  lastName: "Oluwasegun",
  age: 23,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Bolu",
  lastName: "Muhammed",
  age: 16,
  location: "Ebonyi"
};

// 3. Add them to an array
const studentsList: Student[] = [student1, student2];

// 4. Render a table to the DOM
const table = document.createElement("table");


// Optional: Add header row
const headerRow = table.insertRow();
const nameHeader = headerRow.insertCell();
const locationHeader = headerRow.insertCell();
nameHeader.textContent = "First Name";
locationHeader.textContent = "Location";

// Loop through the student list and add rows
studentsList.forEach((student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Append table to the body or a specific element
document.body.appendChild(table);

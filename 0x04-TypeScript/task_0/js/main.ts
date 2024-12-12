// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "Nairobi",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Mombasa",
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Render a table
  const body = document.querySelector("body");
  const table = document.createElement("table");
  const tableHeader = table.createTHead();
  const tableBody = document.createElement("tbody");
  
  // Append header
  const headerRow = tableHeader.insertRow();
  const headerFirstName = document.createElement("th");
  headerFirstName.textContent = "First Name";
  const headerLocation = document.createElement("th");
  headerLocation.textContent = "Location";
  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  
  // Append rows for each student
  studentsList.forEach((student) => {
    const row = tableBody.insertRow();
    const cellFirstName = row.insertCell();
    cellFirstName.textContent = student.firstName;
    const cellLocation = row.insertCell();
    cellLocation.textContent = student.location;
  });
  
  table.appendChild(tableBody);
  body?.appendChild(table);
  
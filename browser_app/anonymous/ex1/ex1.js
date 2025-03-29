const students = ["Hazel", "Dorian", "Scarlett", "Daisy"];
const ulZone = document.getElementById("student");

// これでも動く
// for (const student of students) {
//   const studentElement = document.createElement("li");
//   studentElement.textContent = student;
//   ulZone.appendChild(studentElement);
// }

ulZone.innerHTML = students.map((student) => `<li>${student}</li>`).join("");

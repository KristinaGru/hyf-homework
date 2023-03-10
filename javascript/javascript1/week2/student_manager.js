const class07Students = [];

function addStudentToClass(studentName, array) {
  studentName = studentName.toLowerCase();
  if (!array.includes(studentName)) {
    if (studentName === '' || typeof studentName !== 'string') {
      alert('Please enter a valid name');
    } else if (studentName === 'queen' || array.length < 7) {
      array.push(studentName);
    } else {
      alert('Cannot add more students to class 07');
    }
  } else {
    alert('Student with this name is already in the class');
  }
}

function getNumberOfStudents(array) {
  return array.length;
}

const studentButton = document.getElementById('student-btn');

studentButton.addEventListener('click', () => {
  const paragraph = document.getElementById('student-paragraph');
  const numParagraph = document.getElementById('number-paragraph');
  const student = document.getElementById('student-name').value;
  addStudentToClass(student, class07Students);
  const studentNumber = getNumberOfStudents(class07Students);
  paragraph.textContent = ` ${class07Students} `;

  numParagraph.textContent =
    studentNumber === 1
      ? `There is 1 student in the class`
      : `There are ${studentNumber} students in the class`;
});

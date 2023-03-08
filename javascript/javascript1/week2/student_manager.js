const class07Students = [];

function addStudentToClass(studentName, array) {
  if (!array.includes(studentName)) {
    if (studentName === '' || typeof studentName != 'string') {
      alert('Please enter a valid name');
    } else if (studentName === 'queen' || array.length < 6) {
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
  addStudentToClass(student.toLowerCase(), class07Students);
  const studentNumber = getNumberOfStudents(class07Students);
  paragraph.textContent = ` ${class07Students} `;
  if (studentNumber === 1) {
    numParagraph.textContent = `There is 1 student in the class`;
  } else {
    numParagraph.textContent = `There are ${studentNumber} students in the class`;
  }
});

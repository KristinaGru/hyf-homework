const notes = [];

function saveNote(content, id) {
  const obj = { content: content, id: id };
  notes.push(obj);
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);
saveNote('Do homework', 3);

console.log(notes);

function getNote(id) {
  return isNaN(id)
    ? 'Error! Input a number'
    : notes.find((element) => element.id === id);
}

console.log(getNote(1));

function logOutNotesFormatted() {
  notes.forEach((item) =>
    console.log(
      `The note with id: ${item.id}, has the following note text: ${item.content}.`
    )
  );
}

logOutNotesFormatted();

function deleteNote(id) {
  for (const item of notes) {
    if (isNaN(id)) {
      console.log('Error! Input a number');
    } else if (item.id === id) {
      const index = notes.indexOf(item);
      notes.splice(index, 1);
    }
  }
}

deleteNote(2);

logOutNotesFormatted();

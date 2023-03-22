let userName;
const todo = [];

function getReply(command) {
  if (typeof command === 'string') {
    command = command.toLowerCase();
  }
  if (command.includes('hello my name is')) {
    const words = command.split(' ');
    userName = words[words.length - 1];
    return `Nice to meet you ${userName}`;
  } else if (command === 'what is my name') {
    if (!userName) {
      return 'please introduce yourself';
    } else {
      return userName;
    }
  } else if (command.includes('to my todo') && command.includes('add')) {
    const taskToAdd = command.substring(
      command.indexOf('add') + 4,
      command.lastIndexOf(' to my todo')
    );
    todo.push(taskToAdd);
    return `${taskToAdd} added to your todo`;
  } else if (command.includes('from my todo') && command.includes('remove')) {
    const taskToRemove = command.substring(
      command.indexOf('remove') + 'remove '.length,
      command.lastIndexOf(' from my todo')
    );
    for (const item of todo) {
      if (item === taskToRemove) {
        todo.splice(todo.indexOf(item), 1);
        return `Removed ${taskToRemove} from your todo`;
      }
    }
  } else if (command === 'what is on my todo?') {
    if (todo.length === 1) {
      return `You have 1 todo - ${todo[0]}`;
    } else if (todo.length === 1) {
      return 'You have nothing on your todo';
    } else {
      return `You have ${todo.length} todos - ${
        todo.slice(0, -1).join(', ') + ' and ' + todo.slice(-1)
      }.`;
    }
  } else if (command === 'what day is it today?') {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-GB', options);
  } else if (command.includes('what is')) {
    const mathCommand = command.substring(command.indexOf('what is ') + 8);
    return `${mathCommand} is ${eval(mathCommand)}`;
  } else if (
    command.includes('set a timer for') &&
    command.includes('minutes')
  ) {
    const min = +command.substring(
      command.indexOf('set a timer for') + 'set a timer for '.length,
      command.lastIndexOf(' minutes')
    );
    setTimeout(function () {
      alert('Time is up');
    }, min * 60000);
    return `Timer set for ${min} minutes`;
  } else if (command === 'what time is it?') {
    return new Date().getHours() + ':' + new Date().getMinutes();
  }
}

console.log(getReply('What is my name'));
console.log(getReply('Hello my name is Kristina'));
console.log(getReply('What is my name'));
console.log(getReply('Add fishing to my todo'));
console.log(todo);
console.log(getReply('Add singing in the shower to my todo'));
console.log(todo);
console.log(getReply('Remove singing in the shower from my todo'));
console.log(todo);
console.log(getReply('Add dancing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(todo);
console.log(getReply('what is on my todo?'));
console.log(getReply('what day is it today?'));
console.log(getReply('what is 3 + 10 / 2'));
console.log(getReply('set a timer for 2 minutes'));
console.log(getReply('what time is it?'));

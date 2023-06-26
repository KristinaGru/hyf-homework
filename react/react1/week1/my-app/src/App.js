import './App.css';

const tasks = [
  { task: 'Get out of bed', date: 'Wed Sep 13 2017' },
  { task: 'Brush teeth', date: 'Thu Sep 14 2017' },
  { task: 'Eat breakfast', date: 'Fri Sep 15 2017' }
];

function Header() {
  return <h1>ToDo List</h1>;
}

function Task(props) {
  return (
    <li class="task">
      <input type="checkbox"></input>
      <div>
        <h3>{props.tasks.task}</h3>
        <p>{props.tasks.date}</p>
      </div>
    </li>
  );
}

function TaskList() {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} tasks={task} />
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

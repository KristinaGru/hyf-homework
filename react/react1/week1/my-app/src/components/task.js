export function Task(props) {
  return (
    <li className="task">
      <input type="checkbox"></input>
      <div>
        <h3>{props.tasks.task}</h3>
        <p>{props.tasks.date}</p>
      </div>
    </li>
  );
}

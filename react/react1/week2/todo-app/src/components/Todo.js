const Todo = ({ todo, deleteTodo }) => {
  return (
    <li>
      <input type="checkbox"></input>
      <h4>{todo.description}</h4>
      <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </li>
  );
};

export default Todo;

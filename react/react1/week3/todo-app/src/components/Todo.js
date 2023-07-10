const Todo = ({ todo, deleteTodo }) => {
  return (
    <li>
      <input type="checkbox"></input>
      {todo.deadline ? (
        <h4>
          {todo.description} | {todo.deadline}
        </h4>
      ) : (
        <h4>{todo.description} | no deadline</h4>
      )}
      <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </li>
  );
};

export default Todo;

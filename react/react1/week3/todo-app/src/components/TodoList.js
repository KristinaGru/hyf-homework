import EditTodo from './EditTodo';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, editTodo, updateTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return todo.isEditing ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            updateTodo={updateTodo}
          />
        ) : (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;

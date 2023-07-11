import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import TodoWrapper from './TodoWrapper';

const Todo = ({ todo, deleteTodo, editTodo }) => {
  return (
    <TodoWrapper>
      <li>
        <input type="checkbox"></input>
        {todo.deadline ? (
          <h4>
            {todo.description} | {todo.deadline}
          </h4>
        ) : (
          <h4>{todo.description} | no deadline</h4>
        )}
        <div className="buttons">
          <button onClick={() => deleteTodo(todo.id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <button className="editBtn" onClick={() => editTodo(todo.id)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
      </li>
    </TodoWrapper>
  );
};

export default Todo;

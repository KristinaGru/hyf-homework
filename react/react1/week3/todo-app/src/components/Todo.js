import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import TodoWrapper from './TodoWrapper';
import PropTypes from 'prop-types';

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
Todo.propTypes = {
  todo: PropTypes.object,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func
};
export default Todo;

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import TodoWrapper from './TodoWrapper';

const EditTodo = ({ todo, deleteTodo, updateTodo }) => {
  const [description, setDescription] = useState(todo.description);
  const [deadline, setDeadline] = useState(todo.deadline);
  return (
    <TodoWrapper>
      <li>
        <input type="checkbox"></input>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}></input>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}></input>
        <div className="buttons">
          <button onClick={() => deleteTodo(todo.id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <button
            className="editBtn"
            onClick={() => updateTodo(todo.id, description, deadline)}>
            <FontAwesomeIcon icon={faCheckSquare} />
          </button>
        </div>
      </li>
    </TodoWrapper>
  );
};

export default EditTodo;

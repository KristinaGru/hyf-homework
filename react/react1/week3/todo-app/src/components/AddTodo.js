import { useState } from 'react';
import TodoWrapper from './TodoWrapper';

const AddTodo = ({ addTodo }) => {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  return (
    <>
      <form>
        <TodoWrapper>
          <input
            type="text"
            value={description}
            placeholder="Learn react"
            onChange={(e) => setDescription(e.target.value)}></input>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}></input>
          <button
            type="button"
            onClick={() => {
              addTodo(description, deadline);
            }}
            className="addBtn">
            Add
          </button>
        </TodoWrapper>
      </form>
    </>
  );
};

export default AddTodo;

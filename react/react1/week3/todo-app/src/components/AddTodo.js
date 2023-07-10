import { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  return (
    <>
      <form>
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
      </form>
    </>
  );
};

export default AddTodo;

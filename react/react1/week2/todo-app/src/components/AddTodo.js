import { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [description, setDescription] = useState('');

  return (
    <>
      <form>
        <input
          type="text"
          value={description}
          placeholder="Learn react"
          onChange={(e) => setDescription(e.target.value)}></input>
        <button
          type="button"
          onClick={() => addTodo(description)}
          className="addBtn">
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodo;

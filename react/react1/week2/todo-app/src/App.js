import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Timer from './components/Timer';
import TodoList from './components/TodoList';
import { todos } from './todos';
import { useState } from 'react';
import { v4 as id } from 'uuid';

function App() {
  const [todoList, setTodoList] = useState(todos);

  function addTodo(description) {
    if (description.trim()) {
      setTodoList([...todoList, { id: id(), description: description.trim() }]);
    }
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Timer />
      <Header />
      <AddTodo addTodo={addTodo} />
      {todoList.length > 0 ? (
        <TodoList todos={todoList} deleteTodo={deleteTodo} />
      ) : (
        'No items...'
      )}
    </>
  );
}

export default App;

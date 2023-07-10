import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Timer from './components/Timer';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import { v4 as id } from 'uuid';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(
        'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw'
      );
      const todos = await res.json();
      setTodoList(todos);
    };
    fetchTodos().catch(console.error);
  }, []);

  function addTodo(description, deadline) {
    if (description.trim()) {
      setTodoList([...todoList, { id: id(), description, deadline }]);
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

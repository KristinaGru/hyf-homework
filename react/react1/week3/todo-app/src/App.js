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
      const data = await res.json();
      const todos = data.map((todo) => ({ ...todo, isEditing: false }));
      setTodoList(todos);
    };
    fetchTodos().catch(console.error);
  }, []);

  function addTodo(description, deadline) {
    if (description.trim()) {
      setTodoList([
        ...todoList,
        { id: id(), description, deadline, isEditing: false }
      ]);
    }
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function editTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  }

  function updateTodo(id, description, deadline) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? { ...todo, description, deadline, isEditing: false }
          : todo
      )
    );
  }

  return (
    <>
      <Timer />
      <Header />
      <AddTodo addTodo={addTodo} />
      {todoList.length > 0 ? (
        <TodoList
          todos={todoList}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          updateTodo={updateTodo}
        />
      ) : (
        <p>No items</p>
      )}
    </>
  );
}

export default App;

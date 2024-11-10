import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App(){
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {id: Date.now(), text: text};
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id!==id));
  }

  return (
    <div className = "App">
      <h1>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App;
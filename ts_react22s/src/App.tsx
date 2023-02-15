import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import './App.css';
import { Todo } from './todo.model';


//Declare react functions with "React.FC" type
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    console.log(text);
    setTodos((prevTodos) => [ ...prevTodos, { id: Math.random().toString(), text: text }])
  }
  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>

  );
}

export default App;

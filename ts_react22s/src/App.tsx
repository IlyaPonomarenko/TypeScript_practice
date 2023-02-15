import React from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import './App.css';


//Declare react functions with "React.FC" type
const App: React.FC = () =>{ 
  const todos = [{id: "1", text:"Finish ts project"}]
  return (
    <div className='App'>
      <NewTodo/>
      <TodoList items={todos}/>
    </div>
  
  );
}

export default App;

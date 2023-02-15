import React from 'react';
import TodoList from './components/TodoList';
import './App.css';


//Declare react functions with "React.FC" type
const App: React.FC = () =>{ 
  return (
    <div className='App'>
      <TodoList/>
    </div>
  
  );
}

export default App;

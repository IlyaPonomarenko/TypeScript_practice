import React from 'react';

const TodoList: React.FC = () => {
    const todos = [{id: "1", text:"Finish ts project"}]
    return (
        <ul>
            {todos.map(todo => (<li key={todo.id}>{todo.text}</li>))}
        </ul>
    );
};

export default TodoList;
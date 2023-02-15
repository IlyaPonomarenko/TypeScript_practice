import React from 'react';

interface todoListItems {
    items: {id:string, text:string}[],
}

const TodoList: React.FC<todoListItems> = (props) => {
    
    return (
        <ul>
            {props.items.map(todo => (<li key={todo.id}>{todo.text}</li>))}
        </ul>
    );
};

export default TodoList;
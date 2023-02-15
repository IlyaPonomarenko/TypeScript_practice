import React from 'react';

interface todoListItems {
    items: { id: string, text: string }[];
    onDeleteTodo: (id: string) => void;
    // onEditTodo: (id:string) => void;
}


const TodoList: React.FC<todoListItems> = (props) => {

    return (
        <ul>
            {props.items.map(todo => (<li key={todo.id}>{todo.text}
                {/* <button onClick={props.onEditTodo.bind(todo.text, todo.id)}>edit</button> */}
                <button onClick={props.onDeleteTodo.bind(null, todo.id)}>delete</button>
            </li>))}
        </ul>
    );
};

export default TodoList;
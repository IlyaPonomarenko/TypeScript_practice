import React from 'react';

const NewTodo: React.FC = () => {
    const submitHandler = (event: React.FormEvent) =>{
        event.preventDefault();
    }
    return (
        <form>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id='todo-text' />
            </div>
            <button type='submit'>add todo</button>
        </form>
    );
};

export default NewTodo;
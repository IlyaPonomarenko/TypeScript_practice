import React, { useRef } from 'react';

const NewTodo: React.FC = () => {
    //Establishes a coonnection with an element
    const textInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const inputValue = textInputRef.current!.value;
        console.log(inputValue)
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id='todo-text' ref={textInputRef} />
            </div>
            <button type='submit'>add todo</button>
        </form>
    );
};

export default NewTodo;
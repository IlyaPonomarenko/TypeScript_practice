import React, { useState } from 'react';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    //Establishes a coonnection with an element
    const [task, setTask] = useState<string>("");
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value)
    }
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (task.trim().length === 0) {
            return
        }
        props.onAddTodo(task);
        setTask("")
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input required type="text" id='todo-text' value={task} onChange={handleInput} />
            </div>
            <button type='submit'>add todo</button>
        </form>
    );
};

export default NewTodo;
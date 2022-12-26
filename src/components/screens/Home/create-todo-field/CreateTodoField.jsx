import React, { useState } from "react";

export const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('');

    const addTodo = (title) => {
        setTodos(prev => [
            {
            _id: new Date(),
            title,
            isCompleted: false
        }, 
        ...prev]
        );
        setTitle('')
    };

    return (
        <div className="flex items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-6 py-4 w-full">
            <input
                type="text"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                onKeyPress={event => event.key === 'Enter' && (console.log('click'), addTodo(title))}
                className='bg-transparent w-full border-none outline-none'
                placeholder='Add a task'
            />
        </div>
    );
};

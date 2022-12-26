import React, { useState } from "react";
import { TodoItem } from "./item/TodoItem";
import { CreateTodoField } from "./create-todo-field/CreateTodoField";

const data = [
    {
        _id: "qwer",
        title: "Test task",
        isCompleted: true,
    },
    {
        _id: "qwerwdfw2",
        title: "Test task2",
        isCompleted: false,
    },
    {
        _id: "qwerdfbdfb4",
        title: "Test task3",
        isCompleted: false,
    },
];

export const Home = () => {
    const [todos, setData] = useState(data);

    const changeTodo = (id) => {
        const copyData = [...todos];
        const currentTodo = copyData.find((todo) => todo._id === id);
        currentTodo.isCompleted = !currentTodo.isCompleted;
        setData(copyData);
    };

    const removeTodo = (id) => {
        const copyData = [...todos];
        const filteredData = copyData.filter((todo) => todo._id !== id);
        setData(filteredData);
    };

    // const addTodo = (title) => {
    //     setData( [{
    //         _id: new Date(),
    //         title,
    //         isCompleted: false
    //     }, 
    //     ...todos]
    //     );
    // };

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl text-center mb-6 font-bold ">My todos</h1>
            {todos.map((item) => (
                <TodoItem
                    key={item._id}
                    todo={item}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />
            ))}
            <CreateTodoField setTodos={setData}/>
        </div>
    );
};

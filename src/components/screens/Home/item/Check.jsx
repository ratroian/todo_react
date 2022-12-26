import React from "react";
import { BsCheck } from "react-icons/bs";

export const Check = ({ isCompleted }) => {
    return (
        <div className={`border-2 rounded-lg border-pink-400 ${isCompleted ? 'bg-pink-400' : ''}  w-6 h-6 mr-4 flex items-center justify-center`}>
            {isCompleted && <BsCheck size={20} className="text-gray-900" />}
        </div>
    );
};

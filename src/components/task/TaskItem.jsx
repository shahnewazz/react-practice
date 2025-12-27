import { useState } from "react";

const TaskItem = ({ task, onDeleteTask, onSaveTask, onCompleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const handleSaveTask = () => {
        onSaveTask(task.id, newTitle);
        setIsEditing(false);
    }

    return (
        <>
            <li className="flex items-center space-x-4 mb-2">
                <div className="">
                    <input type="checkbox" className="w-4 h-4" checked={task.completed} onChange={() => onCompleteTask(task.id)} />
                </div>
                {isEditing ? (
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                ) : (
                    <span className={task.completed ? "line-through text-gray-500" : ""}>
                        {task.title}
                    </span>
                )}
                <div className="space-x-2">
                    {isEditing ? (
                        <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={handleSaveTask}>Save</button>
                    ) : (
                        <button className="bg-yellow-500 text-black px-2 py-1 rounded" onClick={() => setIsEditing(true)}>Edit</button>
                    )}
                    <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => onDeleteTask(task.id)}>Delete</button>
                </div>
            </li>
        </>
    );
};

export default TaskItem;
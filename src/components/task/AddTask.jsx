import { useState } from "react";

const AddTask = ({onAddTask}) => {

    const [title, setTitle] = useState("");

    return (
        <>
            <div className="mb-4">
                <input type="text" placeholder="Enter Task" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button className="bg-blue-500 text-white px-4 py-2 rounded ms-3" onClick={() => onAddTask(title)}>Add Task</button>
            </div>
        </>
    );
};

export default AddTask;
import { useReducer } from "react";
import { tasks as initialTasks } from "../../data/tasks";
import taskReducer from "../../reducers/taskReducer";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const Task = () => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    const handleAddTask = (title) => {

        dispatch({
            type: 'ADD_TASK',
            payload: { title }
        })

    }

    const handleDeleteTask = (id) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: { id }
        })
    }

    const handleSaveTask = (id, newTitle) => {
        dispatch({
            type: 'SAVE_TASK',
            payload: { id, title: newTitle }
        })
    }

    const handleTaskCompletion = (id) => {
        dispatch({
            type: 'TASK_COMPLETION',
            payload: { id }
        })
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Task/Reducer Practice</h1>

            <AddTask onAddTask={handleAddTask} />

            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onSaveTask={handleSaveTask} onCompleteTask={handleTaskCompletion} />

        </div>
    );
};

export default Task;
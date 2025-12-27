import TaskItem from "./TaskItem";

const TaskList = ({tasks, onDeleteTask, onSaveTask, onCompleteTask}) => {
    return (
        <>
            <div className="">
                <ul>
                    {tasks.map((task) => <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask} onSaveTask={onSaveTask} onCompleteTask={onCompleteTask} />)}
                </ul>
            </div>   
        </>
    );
};

export default TaskList;
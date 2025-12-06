const taskList = [
    { id: 1, title: 'Complete react list rendering', completed: false },
    { id: 2, title: 'Go to grocery store', completed: true },
    { id: 3, title: 'Read a book on JavaScript', completed: false },
]

const TaskList = () => {
    const list = taskList.map(task => <li key={task.id}>{task.title}</li>);
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Task List</h2>
            <ul>
                {list}
            </ul>
        </>
    );
};

export default TaskList;
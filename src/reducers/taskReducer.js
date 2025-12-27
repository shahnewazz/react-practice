export default function taskReducer(state, action) {
    switch(action.type) {
        case "ADD_TASK" :

        return [
            ...state, 
            {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            }
        ];

        case "DELETE_TASK" :

            return state.filter((task) => task.id !== action.payload.id);

        case "SAVE_TASK" :

            return state.map((task) => {
                if (task.id === action.payload.id) {
                    return { ...task, title: action.payload.title };
                }
                return task;
            });;

        case "TASK_COMPLETION" :
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });

        default :
            throw Error("Unknown action: " + action.type);

    }
}
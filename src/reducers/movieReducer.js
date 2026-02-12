export default function movieReducer(state, action) {
    switch(action.type) {
        case "ADD_MOVIE" :

        return [
            ...state, 
            {
                id: Date.now(),
                title: action.payload.title,
                year: action.payload.year,
                director: action.payload.director,
            }
        ];
        
        default :
            throw Error("Unknown action: " + action.type);

    }
}
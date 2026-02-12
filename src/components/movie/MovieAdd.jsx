import { useState } from "react";

const MovieAdd = ({onAddMovie}) => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");

    const handleAdd = () => {
        onAddMovie(title, director, year);
        setTitle("");
        setDirector("");
        setYear("");
    };
    
    return (
        <>
            <input type="text" placeholder="Movie Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} />
            <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
            <button onClick={handleAdd}>Add Movie</button>
        </>
    );
};

export default MovieAdd;
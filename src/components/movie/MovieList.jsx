import { useReducer } from "react";
import { movies } from "../../data/movies";
import movieReducer from "../../reducers/movieReducer";
import MovieAdd from "./MovieAdd";
import MovieSingle from "./MovieSingle";

const MovieList = () => {

    const [movieList, dispatch] = useReducer(movieReducer, movies);

    const handleAddMovie = (title, director, year) => {
        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                id: new Date().getTime(),
                title,
                director,
                year: parseInt(year, 10)
            }
        });

    };

    return (
        <>
            <h2>Movie List Component</h2>
            <p>This is where the list of movies will be displayed.</p>
            <MovieAdd onAddMovie={handleAddMovie} />
            <ul>
                {movieList.map((movie) => (
                    <MovieSingle key={movie.id} movie={movie} />
                ))}
            </ul>
        </>
    );
};

export default MovieList;

const MovieSingle = ({movie}) => {
    return (
        <>
            <li key={movie.id}>
                {movie.title} ({movie.year}) - Directed by {movie.director}
            </li>
        </>
    );
};

export default MovieSingle;
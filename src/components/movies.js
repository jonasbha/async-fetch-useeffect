import Movie from './movie.js'

const Movies = ({movies}) => {

    return (
        <section>
            <h1>Movies</h1>
            <div className="movies">
                {movies.map((i) =>
                    <Movie key={i} title={i.Title}/>
                )}
            </div>
        </section>
    );
}

export default Movies;
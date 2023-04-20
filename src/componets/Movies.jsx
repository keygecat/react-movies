import {Movie} from './Movie';
import {NotFound} from "../componets/NotFound";

function Movies(props) {
    const {movies =  [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <NotFound />
            )}
        </div>
    );
}

export {Movies};
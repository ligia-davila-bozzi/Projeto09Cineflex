import { useState, useEffect } from 'react';
import PageTitle from '../others/pageTitle';
import Movie from './Movie';
import { getMovies } from '../others/Axios';

export default function Home () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then((movies) => {
            setMovies(movies);
        })
    },[])
    let i = 0;
    console.log (movies.data);
    if (movies.length === 0){
        return (
            <h1>/carregando, menor</h1>
        );
    }

    return (
        <main>
            <PageTitle title="Selecione o filme" />

            <div className="container-movies">
                {movies.data.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </div>
        </main>
    );
}
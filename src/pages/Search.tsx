import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/shared/MoviesCard";
import Footer from "../components/shared/Footer";

const searchURL = process.env.REACT_APP_SEARCH || console.log('SEARCH environment variable error, fill in the .env file correctly and run the application again');
const apiKey = process.env.REACT_APP_API_KEY || console.log('API_KEY environment variable error, fill in the .env file correctly and run the application again');

const SearchPage: React.FC = () => {

    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('q');


    const getSearchedMovies = async (url: any) => {

        const resposta = await fetch(url)

        const data = await resposta.json()

        setMovies(data.results);
    }


    useEffect(() => {

        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

        getSearchedMovies(searchWithQueryURL)

    }, [query])

    return (
        <>
            <div className="container-movie">
                <h2 className="title"> Resultados para:{query}</h2>

                <div className="movies-container">
                    {movies &&
                        movies.map((movie: any) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    }
                </div>

            </div>

            <Footer/>
        </>

    )
}



export default SearchPage;
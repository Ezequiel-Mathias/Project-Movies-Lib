import React, { useEffect, useState } from "react";
import MovieCard from "../components/shared/MoviesCard";
import { useParams } from "react-router-dom";
import Icon from "../components/shared/Icon";
import Footer from "../components/shared/Footer";

const moviesURL = process.env.REACT_APP_API || console.log('API environment variable error, fill in the .env file correctly and run the application again');
const apiKey = process.env.REACT_APP_API_KEY || console.log('API_KEY environment variable error, fill in the .env file correctly and run the application again');


const MoviePage: React.FC = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState<any>(null);

    const getMovie = async (url: any) => {
        const resposta = await fetch(url)
        const data = await resposta.json()
        setMovie(data);
    }

    const formatCurrency = (number: number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    useEffect(() => {

        const movieUrl = `${moviesURL}${id}?${apiKey}`;

        getMovie(movieUrl)

    }, [])



    return (
        <>
            <div className="movie-page">
                {movie && (
                    <>
                        <MovieCard movie={movie} showLink={false} />
                        <p className="taglinedescription">{movie.tagline}</p>

                        <div className="container-info">

                            <div className="info">
                                <h3>
                                    <Icon name="Payments" /> Orçamento:
                                </h3>
                                <p className="tagline">{formatCurrency(movie.budget)}</p>
                            </div>

                            <div className="info">
                                <h3>
                                    <Icon name="Payments" /> Receita:
                                </h3>
                                <p className="tagline">{formatCurrency(movie.revenue)}</p>
                            </div>

                            <div className="info">

                                <h3>
                                    <Icon name="Payments" /> Duração:
                                </h3>
                                <p className="tagline">{movie.runtime} minutos</p>
                            </div>

                            <div className="info description">

                                <h3>
                                    <Icon name="Payments" /> Descrição:
                                </h3>
                                <p className="tagline">{movie.overview}</p>
                            </div>
                        </div>

                    </>
                )}

            </div>

            <Footer />
        </>

    );
}


export default MoviePage
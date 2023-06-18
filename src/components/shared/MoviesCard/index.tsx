
import { Link } from "react-router-dom"
import Icon from "../Icon";


const imageURL = process.env.REACT_APP_IMG || console.log("IMG environment variable error, fill in the .env file correctly and run the application again");

interface IMovieCardProps {
    movie?: any
    showLink?: boolean
}

const MovieCard: React.FC<IMovieCardProps> = ({ movie, showLink = true }) => {

    return (
        <div className="movie-card">
            <img src={movie.poster_path ? imageURL + movie.poster_path : "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725052-stock-illustration-image-available-icon-flat-vector.jpg"} alt={movie.title} />
            <h2>{movie.title}</h2>

            <div className="container-star">
                <Icon name="star" />
                <span>{movie.vote_average}</span>
            </div>

            {showLink &&

                <Link to={`/movie/${movie.id}`}>
                    <div className="button-description">
                        <span>Detalhes</span>
                    </div>
                </Link>

            }
        </div>
    )
}


export default MovieCard
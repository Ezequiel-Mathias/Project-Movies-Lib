import React, { useEffect, useState } from 'react';
import MovieCard from '../components/shared/MoviesCard';
import Footer from '../components/shared/Footer';


const moviesURL = process.env.REACT_APP_API || console.log('API environment variable error, fill in the .env file correctly and run the application again');
const apiKey =  process.env.REACT_APP_API_KEY || console.log('API_KEY environment variable error, fill in the .env file correctly and run the application again');


const HomePage: React.FC = () => {
    
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url : any) => {

        const resposta = await fetch(url)
        const data = await resposta.json()

        setTopMovies(data.results);

        
    }

    
    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl)

    }, [])

    return (

        <>
        
        <div className= "container-movie">
           <h2 className="title"> Melhores filmes:</h2>

           <div className="movies-container">
                {topMovies && 
                    topMovies.map((movie : any) => (
                        <MovieCard key={movie.id}  movie={movie} />
                    ))
                }
           </div>
            
        </div>

        <Footer/>

        </>
       
    );
}


export default HomePage
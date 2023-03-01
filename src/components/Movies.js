import React from "react";
import { Link } from "react-router-dom"
import './movies.css';

import { useSelector } from "react-redux";
import { selectMovies } from '../features/allMovies/allMoviesSlice';

const Movies = () => {
	const movies = useSelector(selectMovies)//include sort by year function here

	console.log(movies);
	return (
		<div className="container">
	
		{
			movies.map((movie)=>{
				return(
					<div className = 'card-column'>
						<div className = 'card'>
							<div className='card-image' key = {movie.id}>
							<div className = 'card-content'>
									<Link to={`/movies/${movie.id}`}>
										<img  src='https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg' alt=''/>
										<h2 className = 'card-title'>{movie.title}</h2>
										<p className = 'card-text'><small>{movie.price}</small></p>
									</Link>
								</div>
							</div>
						</div>
					</div>
				)
			})
		}
		{/*SideNav Component */}

	</div>
		);
};

export default Movies;

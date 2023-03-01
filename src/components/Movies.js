import React, { useState } from "react";
import Nav from "./Nav";
import SingleMovie from "./SingleMovie";
import SinglePerson from "./SinglePerson";
import Admin from "./Admin";
import UserProfile from "./UserProfile";
import Users from "./Users";
import Cart from "./Cart";
import Orders from "./Orders";
import SideNav from "./SideNav";
import LogIn from "./LogIn";
import NoPage from "./NoPage";

import { useSelector } from "react-redux";
import { selectMovies } from '../features/allMovies/allMoviesSlice';

const Movies = () => {
	const movies = useSelector(selectMovies)

	console.log(movies);
	return (
		<div>
		{
			movies.map((movie)=>{
				return(
					<div key = {movie.id}>
						<h4>Title: {movie.title}</h4>
						<h4> Genre: {movie.genre}</h4>
						<h4>Price {movie.price}</h4>
						<h4>Year Released: {movie.year}</h4>
						<h4>Inventory:{movie.inventory}</h4>
						<h4>Description:{movie.description}</h4>
					</div>
				)
			})
		}
	</div>
		);
};

export default Movies;

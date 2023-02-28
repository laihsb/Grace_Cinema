import React, { useState } from "react";
import Nav from "./Nav";
import SingleMovie from "./SingleMovie";
import Personnel from "./Xpersonnel";
import SinglePerson from "./SinglePerson";
import Admin from "./Admin";
import UserProfile from "./UserProfile";
import Users from "./Users";
import Cart from "./Cart";
import Orders from "./Orders";
import SideNav from "./SideNav";
import LogIn from "./LogIn";
import NoPage from "./NoPage";

const moviesDummy = [
	{
		title: 'The Hobbit',
		genre: 'Fantasy',
		year: 1977,
		description: "A homebody hobbit in Middle Earth gets talked into joining a quest with a group of dwarves to recover their treasure from a dragon.",
		price: 19.99,
		inventory: 10
	},
	{
		title: 'The Lord of the Rings',
		genre: 'Fantasy',
		year: 1978,
		description: "The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron's reign over Middle-earth.",
		price: 19.99,
		inventory: 10
	},
]

const Movies = () => {
	const [movies, setMovies] = useState(moviesDummy)
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

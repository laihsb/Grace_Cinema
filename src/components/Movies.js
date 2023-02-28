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

const moviesDummy = [
	{
		id: 4,
		title: "The Lord of the Rings: The Fellowship of the Ring",
		genre: "Fantasy",
		year: 2001,
		description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
		price: 19.99,
		inventory: 10,
		imageUrl: "./assets/movieImg/lotrFellowshipOfTheRing.jpg",
		createdAt: "2023-02-28T20:54:58.337Z",
		updatedAt: "2023-02-28T20:54:58.337Z",
		personnels: 
		[
			{
				id: 1,
				fName: "Elijah",
				lName: "Wood",
				type: "Actor",
				imageUrl: "./assets/personnelImg/elijahWood.jpg",
				details: "Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!",
				createdAt: "2023-02-28T20:54:58.371Z",
				updatedAt: "2023-02-28T20:54:58.371Z",
				MoviePersonnel: {
					createdAt: "2023-02-28T20:56:52.639Z",
					updatedAt: "2023-02-28T20:56:52.639Z",
					personnelId: 1,
					movieId: 4
				}
			},
			{
				id: 2,
				fName: "Ian",
				lName: "McKellen",
				type: "Actor",
				imageUrl: "./assets/personnelImg/ianMckellen.jpg",
				details: "Lorem Ipsum is a place holder text. While the classic lorem works very well, if you want some spicier alternatives we are serving those as well right here. This is our Hodor Ipsum Generator. Hodor, originally named Wylis,was a simpleminded servant of House Stark at Winterfell working in the stables in HBO series Game of Thrones. This generator generates Hodor Ipsum. Out of all the Lorem generators this one is the toughest to crack ;). It is time to get rid of your old boring placeholder texts!",
				createdAt: "2023-02-28T20:54:58.371Z",
				updatedAt: "2023-02-28T20:54:58.371Z",
				MoviePersonnel: {
					createdAt: "2023-02-28T22:13:24.866Z",
					updatedAt: "2023-02-28T22:13:24.866Z",
					personnelId: 2,
					movieId: 4
				}
			}
		]
	},
	{
	id: 20,
	title: "Thor: The Dark World",
	genre: "Action/Adventure",
	year: 2013,
	description: "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
	price: 19.99,
	inventory: 10,
	imageUrl: "./assets/movieImg/thorDarkWorld.jpg",
	createdAt: "2023-02-28T20:54:58.337Z",
	updatedAt: "2023-02-28T20:54:58.337Z",
	personnels: [ ]
	},
	{
	id: 25,
	title: "Captain America: Civil War",
	genre: "Action/Adventure",
	year: 2016,
	description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
	price: 19.99,
	inventory: 10,
	imageUrl: "./assets/movieImg/captainAmericaCivilWar.jpg",
	createdAt: "2023-02-28T20:54:58.337Z",
	updatedAt: "2023-02-28T20:54:58.337Z",
	personnels: [ ]
	},
	{
	id: 26,
	title: "Doctor Strange",
	genre: "Action/Adventure",
	year: 2016,
	description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
	price: 19.99,
	inventory: 10,
	imageUrl: "./assets/movieImg/doctorStrange.jpg",
	createdAt: "2023-02-28T20:54:58.337Z",
	updatedAt: "2023-02-28T20:54:58.337Z",
	personnels: [ ]
	},
	{
	id: 27,
	title: "Guardians of the Galaxy Vol. 2",
	genre: "Action/Adventure",
	year: 2017,
	description: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
	price: 19.99,
	inventory: 10,
	imageUrl: "./assets/movieImg/guardiansOfTheGalaxyVol2.jpg",
	createdAt: "2023-02-28T20:54:58.337Z",
	updatedAt: "2023-02-28T20:54:58.337Z",
	personnels: [ ]
	},
]

const Movies = () => {
	const [movies, setMovies] = useState(moviesDummy)

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

import React, { useState } from "react";
import Nav from "./Nav";
import Movies from "./Movies";
import Personnel from "./Personnel";
import SinglePerson from "./SinglePerson";
import Admin from "./Admin";
import UserProfile from "./UserProfile";
import Users from "./Users";
import Cart from "./Cart";
import Orders from "./Orders";
import SideNav from "./SideNav";
import LogIn from "./LogIn";
import NoPage from "./NoPage";

const movieDummy = {
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
};

const SingleMovie = () => {
	const [movie, setMovie] = useState(movieDummy)

  return (
		<div>Single Movie</div>
	);
};

export default SingleMovie;

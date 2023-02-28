import React from "react";
import Nav from "./Nav";
import Movies from "./Movies";
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

const movieDummy = {
	title: 'The Hobbit',
	genre: 'Fantasy',
	year: 1977,
	description: "A homebody hobbit in Middle Earth gets talked into joining a quest with a group of dwarves to recover their treasure from a dragon.",
	price: 19.99,
	inventory: 10
}

const SingleMovie = () => {

  return (
		<div>Single Movie</div>
	);
};

export default SingleMovie;

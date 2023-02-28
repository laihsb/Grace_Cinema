import React from 'react';
import Nav from "./components/Nav";
import Movies from "./components/Movies/Movies";
import SingleMovie from "./components/Movies/SingleMovie";
import Personnel from "./components/Personnel/Personnel";
import SinglePerson from "./components/Personnel/SinglePerson";
import Admin from "./components/Users/Admin";
import UserProfile from "./components/Users/UserProfile";
import Users from "./components/Users/Users";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import SideNav from "./components/SideNav";
import LogIn from "./components/LogIn";

const noPage = () => {
	return (
		<h1>Welcome to the noPage Component!</h1>
	)
}

export default noPage


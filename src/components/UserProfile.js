import React, { useState } from "react";
import Nav from "./Nav";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import Personnel from "./Personnel";
import SinglePerson from "./SinglePerson";
import Admin from "./Admin";
import Users from "./Users";
import Cart from "./Cart";
import Orders from "./Orders";
import SideNav from "./SideNav";
import LogIn from "./LogIn";
import NoPage from "./NoPage";

const userDummy = {
		email: 'user1@customer.mail',
		password: 'password1',
		fName: 'Samwise',
		lName: 'Gamgee',
		type: 'customer'
}

const UsersProfile = () => {
	const [user, setUser] = useState(userDummy)


  return <h1>Welcome to the User Profile Component!</h1>;
};

export default UsersProfile;

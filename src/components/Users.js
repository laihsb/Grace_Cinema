import React, { useState } from "react";
import Nav from "./Nav";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import Personnel from "./Xpersonnel";
import SinglePerson from "./SinglePerson";
import Admin from "./Admin";
import UserProfile from "./UserProfile";
import Cart from "./Cart";
import Orders from "./Orders";
import SideNav from "./SideNav";
import LogIn from "./LogIn";
import NoPage from "./NoPage";

const usersDummy = [
	{
		email: 'user1@customer.mail',
		password: 'password1',
		fName: 'Samwise',
		lName: 'Gamgee',
		type: 'customer'
	},
	{
		email: 'user2@customer.mail',
		password: 'password2',
		fName: 'Samuel',
		lName: 'Glamgy',
		type: 'customer'
	},
	{
		email: 'user3@customer.mail',
		password: 'password3',
		fName: 'Fred',
		lName: 'Bagson',
		type: 'customer'
	},
	{
		email: 'user4@customer.mail',
		password: 'password4',
		fName: 'Gerald',
		lName: 'Rivers',
		type: 'customer'
	},
	{
		email: 'user5@customer.mail',
		password: 'password5',
		fName: 'Jennifer',
		lName: 'Ventley',
		type: 'customer'
	},
]

const Users = () => {
	const [users, setUsers] = useState(usersDummy)

  return <h1>Welcome to the Users Component!</h1>;
};

export default Users;

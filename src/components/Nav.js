import React from "react";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
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
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
			<h1>Welcome to the Nav Component!</h1>
      <Link to='/'>Grace Cinema</Link>
			<span> </span>
			<Link to='/login'>Log In/Sign Up</Link>
    </div>
  );
};

export default Nav;

import React from "react";
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
import NoPage from "./components/NoPage";
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

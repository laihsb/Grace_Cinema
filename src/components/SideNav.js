import React from "react";
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
import LogIn from "./components/LogIn";
import NoPage from "./components/NoPage";

// The sideNav bar

const SideNav = () => {
  return (
    <div>
			<h1>Welcome to the Side Nav Component!</h1>
      <div>
        <ul id="sidenav">
          <li>
            <a href="#">Orders</a>
          </li>
          <li>
            <a href="#">Personal Info</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

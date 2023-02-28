import React from "react";
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

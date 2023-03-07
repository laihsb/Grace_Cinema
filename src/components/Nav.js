import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const Nav = () => {
  const loggedIn = useSelector((state) => !state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <nav className="nav-bar">


          <Link to="/signUp">SignUp</Link>
          <Link to="/">
            <h1>Grace Cinema</h1>
          </Link>
          <Link to="/cart">
            <div className="nav-bag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
              <span className="bag-quantity">
                <span>{cartTotalQuantity}</span>
              </span>
            </div>
          </Link>
    </nav>
  );
};

export default Nav;

import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import SingleMovie from "./components/SingleMovie";
// import Personnel from "./components/Personnel";
import SinglePerson from "./components/SinglePerson";
import Admin from "./components/Admin";
import UserProfile from "./components/UserProfile";
import Users from "./components/Users";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import SideNav from "./components/SideNav";
import LogIn from "./components/LogIn";
import NoPage from "./components/NoPage";
import UpdateInfo from './components/UpdateInfo';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Personnel from './components/Xpersonnel'

import { Link, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMoviesAsync } from "./features/allMovies/allMoviesSlice";
import { fetchPersonnelAsync } from "./features/allPersonnelSlice";
import { fetchUsersAsync } from "./features/users";
import { fetchOrdersAsync } from "./features/orders";


function App() {
	const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsync());
    dispatch(fetchPersonnelAsync());
    dispatch(fetchUsersAsync());
    dispatch(fetchOrdersAsync());
  }, [dispatch]);
  return (
    <div className="App">
			<Nav />
			<Link to='/movies'>All Movies</Link>
			<Link to='/movies/id'>Single Movie</Link>
			<Link to='/people/id'>Single Person</Link>
			<Link to='/admin'>Admin</Link>
			<Link to='/users'>All Users</Link>
			<Link to='/user/id'>Single User</Link>
			<Link to='/cart'>Your Cart</Link>
			<Link to='/orders'>All Orders</Link>
			<Link to='/sidenav'>Side Nav Components</Link>
			<Link to='/login'>Login/Logout</Link>
			<Link to='/nopage'>No Page Component</Link>
			<Link to='/update'>Update Form</Link>
			<Link to='/add-product'>Add Product Form</Link>
			<Link to='/edit-product'>Edit Product Form</Link>
			<Link to='/personnel'>Personnel info</Link>

			<Routes>
				<Route path='/movies' element={<Movies />} />
				<Route path='/movies/id' element={<SingleMovie />} />
				<Route path='/people/id' element={<SinglePerson />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/user/id' element={<UserProfile />} />
				<Route path='/users' element={<Users />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/orders' element={<Orders />} />
				<Route path='/sidenav' element={<SideNav />} />
				<Route path='/login' element={<LogIn />} />
				<Route path='/nopage' element={<NoPage />} />
				<Route path='/update' element={<UpdateInfo />} />
				<Route path='/add-product' element={<AddProduct />} />
				<Route path='/edit-product' element={<EditProduct />} />
				<Route path='/personnel' element={<Personnel/>} />
			</Routes>
		</div>
	)
}

export default App;

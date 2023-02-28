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
import NoPage from "./components/NoPage";

import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
			<Nav />
			{/* <Movies /> */}
			{/* <SingleMovie /> */}
			{/* <Personnel /> */}
			{/* <SinglePerson /> */}
			{/* <Admin /> */}
			{/* <UserProfile /> */}
			{/* <Users /> */}
			{/* <Cart /> */}
			{/* <Orders /> */}
			{/* <SideNav /> */}
			{/* <LogIn /> */}
			{/* <NoPage /> */}
			<Link to='/movies'>All Movies</Link>

			<Routes>
				<Route path='/movies' element={<Movies />} />
			</Routes>
		</div>
	)
}

export default App;

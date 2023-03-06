import React from "react";
import Nav from "./Nav";
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
import NoPage from "./NoPage";

{/* <script type="text/babel">
const SignIn = ({ signIn }) => {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const onChange = (ev) => {
		if (ev.target.name === 'username') setUsername(ev.target.value);
		if (ev.target.name === 'password') setPassword(ev.target.value);
	};
	const onSubmit = (ev) => {
		ev.preventDefault();
		signIn({ username, password });
	};
	return (
		<form onSubmit={onSubmit}>
			<input value={username} onChange={onChange} name="username" />
			<input value={password} onChange={onChange} name="password" />
			<button>Sign In</button>
		</form>
	);
};

const App = () => {
	const [auth, setAuth] = React.useState({});

	const attemptTokenLogin = async () => {
		const token = window.localStorage.getItem('token');
		if (token) {
			const { data: auth } = await axios.get('/api/auth', {
				headers: {
					authorization: token,
				},
			});
			setAuth(auth);
		}
	};
	React.useEffect(() => {
		attemptTokenLogin();
	}, []);

	const logout = () => {
		window.localStorage.removeItem('token');
		setAuth({});
	};

	const signIn = async (credentials) => {
		const response = await axios.post('/api/auth', credentials);
		const { token } = response.data;
		window.localStorage.setItem('token', token);
		attemptTokenLogin();
	};

	if (!auth.id) return <SignIn signIn={signIn} />;

	return (
		<div>
			Welcome {auth.username}!
			<button onClick={logout}>Logout</button>
		</div>
	);
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
</script> */}

const LogIn = () => {
	return (
		<h1>Welcome to the LogIn Component!</h1>
	)
}

export default LogIn


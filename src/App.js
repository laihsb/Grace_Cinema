import Nav from "./components/Nav";
import Movies from "./components/Movies/Movies";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Movies />
    </div>
  );
}

export default App;

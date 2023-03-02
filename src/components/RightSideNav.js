import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMovies } from "../features/allMovies/allMoviesSlice";

// The sideNav bar

const RightSideNav = () => {
    const movies = useSelector(selectMovies);

  const [filtered, setfilter] = useState(movies);

  // const fantasyMovie = movies.filter(fantasy => {
  //   return fantasy.genre.includes('Fantasy')
  // })

//   useEffect(() => {
// setfilter(fantasyMovie)
//   }, [])





  // console.log(fantasyMovie)
  return (
    <div className="container-sorted-movies">
      <h1>Sort Movies By!</h1>
      <div>
        {/* <div
          onClick={() =>
            setfilter(filtered)(console.log('clicked'))}>
          Fantasy
        </div> */}
        <div onClick={() =>
            setfilter(
              movies.filter((action) => {
                // console.log('sorted')
                if (action.genre.includes("Action/Adventure")) {
                  return <div>{console.log(action.title)}</div>;
                }
              })
            )
          }>Action/Adventure</div>
        {/* <div>Biography/Historical</div>

        <div>Comedy</div>

        <div>Documentary</div>
        <div>Drama</div>
        <div>Family/Animated</div>
        <div>Horror/Thriller</div>
        <div>Romance</div>
        <div>Science Fiction</div>
        <div>Western</div> */}
      </div>
      {/* { moviesSorted.map((sorted) => {

      <div className="sorted-card">
            <ul id="sidenav">

              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Personal Info</a>
              </li>
            </ul>
          </div>

      })

        } */}
    </div>
  );
};

export default RightSideNav;

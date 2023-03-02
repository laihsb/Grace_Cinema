import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./movies.css";

import { useSelector } from "react-redux";
import { selectMovies } from "../features/allMovies/allMoviesSlice";
import Pagination from "./Pagination";

const Movies = () => {
  const movies = useSelector(selectMovies); //include sort by year function here

  // console.log(movies.length);

  const [currentPage, setCurrentPage] = useState(1);

  // num of items you want to display in the page
  const [postPerPage, setPostPerPage] = useState(9);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = movies.slice(firstPostIndex, lastPostIndex);
  console.log(postPerPage);

  return (
    <div>
      <section className="container">
        {currentPost.map((movie) => {
          return (
            <div className="card">
              <div className="card-image">
                <div key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                    <img className="movieImage" src={movie.imageUrl} alt="" />
                    <h2 className="movieTitle">{movie.title}</h2>
                    <h2 className="moviePrice">
                      <small>${movie.price}</small>
                    </h2>
                    {/* <p id="movieDesc">{movie.description}</p> */}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        {/*SideNav Component */}
      </section>
      <Pagination
        totalPosts={movies.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Movies;

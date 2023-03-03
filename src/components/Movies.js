import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./movies.css";

import { useSelector, useDispatch } from "react-redux";
import { selectMovies } from "../features/allMovies/allMoviesSlice";
import Pagination from "./Pagination";
import { addToCart } from "../features/cartSlice";

const Movies = () => {
  const movies = useSelector(selectMovies); //include sort by year function here
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(movies.length);

  const [currentPage, setCurrentPage] = useState(1);

  // num of items you want to display in the page
  const [postPerPage, setPostPerPage] = useState(9);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = movies.slice(firstPostIndex, lastPostIndex);

  const handleAddToCart = (movie) => {
    dispatch(addToCart(movie));
    navigate("/cart");
  };

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
                  <div>
                    <button onClick={() => handleAddToCart(movie)}>
                      Add To Cart
                    </button>
                  </div>
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

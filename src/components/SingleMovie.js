import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleMovieAsync, selectSingleMovie } from "../features/singleMovieSlice";


const SingleMovie = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
const single = useSelector(selectSingleMovie)

useEffect(() => {
	dispatch(fetchSingleMovieAsync(id))
}, [dispatch])

  return (
		<div>Single Movie
			<img src={`${single.imageUrl}`}/>
		<h1>{single.title}</h1>
		<h2>{single.year}</h2>
		<h3>Genre: {single.genre}</h3>
		<h4>Price: {single.price}</h4>
		<p>Description: {single.description}</p>
		</div>
	);
};

export default SingleMovie;

"use client"
import Header from "./header.js";
import Movie_row from "./movie_row.js";
import Rating from "./rating.js";
import Footer from "./footer.js";
import {initialMovieList} from "./movie_list.js";
import Delete from "./delete.js";
import { useState } from 'react';
function page(){
	const[movie,setMovie]=useState(initialMovieList);
	
	function handleDelete(id){
		const newMovielist=movie.filter((items)=>items.id!==id);
		setMovie(newMovielist)
	};
	
    const handleLike = (id) => {
      const movieDetails = movie.find((movieDetails) => movieDetails.id === id);
      if (movieDetails) {
        movieDetails.likes += 1;
        setMovie([...movie]);
        sortMoviesByLikes(); 
      }
    };
    
    const handleDislike = (id) => {
      const movieDetails = movie.find((movieDetails) => movieDetails.id === id);
      if (movieDetails) {
        movieDetails.likes -= 1;
        setMovie([...movie]);
        sortMoviesByLikes();
      }
    };

    const sortMoviesByLikes = () => {
      const sortedMovies = [...movie].sort((a, b) => b.likes - a.likes);
      setMovie(sortedMovies);
    };

	return (
	    <>
		    <Header/>
		    {movie.map((movieDetails) => (
		    <Movie_row
			    key={movieDetails.movieName}
        		movieDetails={movieDetails}
        		onDelete={() => handleDelete(movieDetails.id)}
        		onClickLikes={()=>handleLike(movieDetails.id)}
			      onClickDislikes={()=>handleDislike(movieDetails.id)}
		    />
		    ))};
		    <Footer />
		</>
	);	
};
export default page;
























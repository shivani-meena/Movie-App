"use client"
import Header from "./header.js";
import Movie from "./movie_row.js";
import Footer from "./footer.js";
import {movie_list} from "./movie_list.js";
import Delete from "./delete.js";
import React, { useState } from 'react';
function Box(){
	const[movie,setMovie]=useState(movie_list);
	function handleDelete(id){
		const newMovielist=movie.filter((items)=>items.id!==id);
		setMovie(newMovielist)
	};
	return (
		<>
			<Header/>
			 <div>
      			{movie.map((movieDetails) => (
        			<Movie 
        				key={movieDetails.id}
		    			movieDetails={movieDetails}
		    			onClick={() => handleDelete(movieDetails.id)}

        			/>
      			))}
    		</div>
			<Footer />
		</>
	);	
};
export default Box;



































































import Delete from "./delete.js";
import Rating from "./rating.js";
import Action_row from "./Action_row.js";
function Movie_row({movieDetails,onClickLikes,onClickDislikes,onDelete,likes}){
	return (
		<div className="movie_row">
			<div className="movie_image">
				<img className="movie_image" src={movieDetails.image_url}/>
			</div>
			<div className="movie_details">
				<h1>{movieDetails.movieName}</h1>
				<p>{movieDetails.year} • {movieDetails.time} | {movieDetails.jenre}</p>
				<h4>description</h4>
				<p>{movieDetails.description}</p>
			</div>
			<div className="action">
			    <Action_row
                    likes={movieDetails.likes}
                    onClickLikes={onClickLikes}
                    onClickDislikes={onClickDislikes}
                    onDelete={onDelete}
			     />
			</div>
	  </div>
	);
};
export default Movie_row;

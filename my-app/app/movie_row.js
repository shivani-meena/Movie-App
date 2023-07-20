import Action from "./Action_row.js";
import Delete from "./delete.js";
import {movie_list} from "./movie_list.js";
function Movie(props) {
	return (
		<>
		<div className="movie_row">
			<div className="movie_image">
				<img className="movie_image" src={props.movieDetails.image_url}/>
			</div>
			<div className="movie_details">
				<h1>{props.movieDetails.movie}</h1>
				<p>{props.movieDetails.year} • {props.movieDetails.time} | {props.movieDetails.jenre}</p>
				<h4>description</h4>
				<p>{props.movieDetails.description}</p>
			</div>
			<div className="action">
				<Action />
				<Delete 
					onClick={props.onClick}
				/>
			</div>
	    </div>
	    </>
	);
};
export default Movie;




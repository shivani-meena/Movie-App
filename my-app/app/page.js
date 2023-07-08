import Header from "./header.js";
import Movie from "./movie_data.js";
import Footer from "./footer.js";
import {movie_list} from "./movie_list.js";
function Box(){
	return (
		<>
			<Header />
			 <div>
      			{movie_list.map((movieDetails) => (
        			<Movie key={movieDetails.id} movieDetails={movieDetails} />
      			))}
    		</div>
			<Footer />
		</>
	);	
}
export default Box;



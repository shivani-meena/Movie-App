import Rating from "./rating.js";
import Delete from "./delete.js";
function Action_row(props){
    return(
       <>
        <Rating
	       {...props}
	    />
	    <Delete 
            {...props}
	    />
	    </>
    );
};
   
export default Action_row;

import React, { useState } from 'react';
import {movie_list} from "./movie_list.js";
function Rating() {
  const [count, setCount] = useState(0);

  const handleLikeClick = () => {
    setCount(count + 1);
  };

  const handleDislikeClick = () => {
    setCount(count - 1);
  };

  return (
    <>
      <img className ="like" src="Icon-Like.png" onClick={handleLikeClick} />
      <div className="rating">{count}</div>
      <img className="dislike" src="Icon-Dislike.png" onClick={handleDislikeClick} />
    </>
  );
}

export default Rating;



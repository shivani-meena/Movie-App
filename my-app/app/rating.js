import React from 'react';

function Rating({ onClickLikes, onClickDislikes, likes }) {
  return (
    <>
      <img className="like" src="Icon-Like.png" onClick={onClickLikes} />
      <div className="rating">{likes}</div>
      <img className="dislike" src="Icon-Dislike.png" onClick={onClickDislikes} />
    </>
  );
}

export default Rating;


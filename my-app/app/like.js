"use client"
import React, { useState } from 'react';
import Dislike from "./dislike.js";

function Like() {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <>
      <img
        className="like"
        src="Icon-Like.png"
        alt="Like Button"
        onClick={() => setLikeCount(likeCount + 1)}
      />
      <div className="rating">{likeCount}</div>
    </>
  );
}

export default Like;

















































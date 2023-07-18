"use client"
import React, { useState } from 'react';

function Dislike() {
  const [dislikeCount, setDislikeCount] = useState(0);

  return (
    <>
      <img
        className="dislike"
        src="Icon-Dislike.png"
        onClick={() => setDislikeCount(dislikeCount - 1)}
      />
    </>
  );
}

export default Dislike;


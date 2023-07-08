"use client"
import React, { useState } from 'react';
function Dislike() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img
        className="dislike"
        src="Icon-Dislike.png"
        alt="Dislike Button"
        onClick={() => setCount(count - 1)}
      />
      <div className="rating">{count}</div>
    </>
  );
}

export default Dislike;


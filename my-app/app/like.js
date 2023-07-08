"use client"
import React, { useState } from 'react';
function Like(){
	const [Count, setCount] = useState(0);
	return(
		<>
			<img className="like" 
			src="Icon-Like.png"
			onClick={() => setCount(Count + 1)}
			/>
			<div className="rating">{Count}</div>
		</>
	);
	
};

export default Like;



 

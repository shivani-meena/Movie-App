import React from 'react';

function Delete(props) {
  return (
    <img className="delete" src="Delete.png" onClick={props.onClick}  />
  );
}

export default Delete;


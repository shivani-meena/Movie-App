import React from 'react';
function Delete({onDelete}) {
  return (
    <img className="delete" src="Delete.png" onClick={onDelete}  />
  );
};

export default Delete;


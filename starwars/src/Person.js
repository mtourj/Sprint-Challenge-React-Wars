import React from 'react';

const Person = props => {
  return (
    <div className='person'>
      <h2>{props.name}</h2>
    </div>
  );
};

export default Person;
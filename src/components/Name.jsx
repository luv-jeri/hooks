import React from 'react';

function Name({ name, setName }) {

  console.log('Name**', name);
  return (
    <div>
      <h5>Name - {name}</h5>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

export default React.memo(Name);

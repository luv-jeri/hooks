import React from 'react';

function Job({ job, setJob }) {
  console.log('Job**');

  return (
    <div>
      <h5>Job - {job}</h5>
      <input
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
    </div>
  );
}

export default React.memo(Job);

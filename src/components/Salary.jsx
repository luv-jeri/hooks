import React from 'react';

function Salary({ salary, setSalary }) {
  console.log('Salary**');
  return (
    <div>
      <h5>Salary - {salary}</h5>
      <input
        onChange={(e) => {
          setSalary(e.target.value);
        }}
      />
    </div>
  );
}


export default React.memo(Salary);
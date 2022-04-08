import './App.css';
import { useState, useEffect, useMemo } from 'react';
function App() {
  const [fee, setFee] = useState(0);
  const [count, setCount] = useState(0);

  const data = [
    {
      name: 'John',
      salary: '10000',
      id: 1,
    },
    {
      name: 'Jane',
      salary: '20000',
      id: 2,
    },
  ];

  // `  intialState` is the initial state of the object if expensive to calculate
  const [test, setTest] = useState(() => {
    return JSON.stringify(data);
  });

  const handleFee = () => {
    //` set State if multiple state changes
    setFee((value) => {
      return value + 1;
    });
    setFee((value) => {
      return value + 1;
    });
    setFee((value) => {
      return value + 1;
    });
    setFee((value) => {
      return value + 1;
    });
  };

  const data_ = { name: 'Sanjay', salary: '10000', id: 3 };
  const data__ = useMemo({ name: 'Sanjay', salary: '10000', id: 3 }, []);

  console.log(data__);

  // const { name, salary } = data_;
  // ______
  // const name = data_.Sanjay;
  // const salary = data_.salary;

  useEffect(() => {}, [{ ...data }]);

  return (
    <div>
      <h1>Fee - {fee}</h1>
      <button onClick={handleFee}>Click me </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Count{count}
      </button>
    </div>
  );
}

export default App;

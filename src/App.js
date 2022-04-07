import './App.css';
import { useState, useMemo, useCallback } from 'react';
import Name from './components/Name';
import Job from './components/Job';
import Salary from './components/Salary';
import Heading from './components/Heading';

function App() {
  const [name, setName] = useState('John');
  const [job, setJob] = useState('Developer');
  const [salary, setSalary] = useState('1000');
  const [count, setCount] = useState(0);

  const handleName = useCallback((name) => {
    setName(`Mr. ${name}`);
  }, []);

  const sq = useMemo(() => {
    console.log('sq**');
    return count * count;
  }, [count]);

  const handleSalary = useCallback((salary) => {
    setSalary(`₹ ${salary}`);
  }, []);

  const handleJob = useCallback((job) => {
    setJob(`🚩 ${job}`);
  }, []);

  const theme = {
    color: '#FFEEEE',
    backgroundColor: '#247881',
  };

  return (
    <div
      style={{
        color: theme.color,
        backgroundColor: theme.backgroundColor,
        height: '100vh',
        width: '100vw',
      }}
    >
      <h1>{sq}</h1>
      <Heading />
      <Name name={name} setName={handleName} />
      <Job job={job} setJob={handleJob} />
      <Salary salary={salary} setSalary={handleSalary} />
      Count - {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;

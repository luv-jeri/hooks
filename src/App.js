import './App.css';
import { useState, useEffect, useMemo } from 'react';
import React from 'react';

const Form = ({ fields }) => {
  return (
    <div>
      {fields.map((field) => {
        return (
          <div key={field}>
            <label>{field}</label>
          </div>
        );
      })}
    </div>
  );
};

// const CheckBox = ({ children }) => {
//   const [check, setCheck] = useState(false);
//   const all_ = React.Children.map(children, (child) => {
//     if (typeof child.type !== 'function') {
//       return child;
//       // return null;
//       // throw new Error('child must be a function');
//     }
//     const clone = React.cloneElement(child, {
//       toggle: () => {
//         console.log('toggle');
//         setCheck(!check);
//       },
//       check,
//     });
//     return clone;
//   });
//   return all_;
// };

// const CheckInput = ({ toggle, check }) => {
//   console.log('check', check);
//   return <input checked={check} onClick={toggle} type='checkbox' />;
// };

// const Label = ({ toggle, children }) => {
//   if (!children) return null;
//   if (!toggle) return <span>{children}</span>;
//   return <label onClick={toggle}>{children}</label>;
// };

// function App() {
//   return (
//     <CheckBox>
//       <CheckInput />
//       <hr />
//       <Label>Hello</Label>
//     </CheckBox>
//   );
// }

// ` Declarative and Imperative

// # Imperative
const a = [1, 2, 3];
a.push(5);  

//`    pure function
//`    no side effect
//`    no dependency
//`    no state
//`    no mutable
//`    no async
//`    no callback
//`    no DOM

// # Declarative
const addToArr = (array, el) => {
  const temp = [...array, el];
  return temp;
};

const arr = [1, 2, 3, 4, 5];
const arr2 = addToArr(arr, 6);

function App() {
  return (
    <div>
      <h1>
        Advance Stuff
        {arr2.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </h1>
    </div>
  );
}

export default App;

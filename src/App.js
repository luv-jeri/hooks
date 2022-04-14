import { useState, useEffect, useMemo } from 'react';
import React from 'react';

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
//       <Label>Click Me</Label>
//     </CheckBox>
//   );
// }

const Label = ({ check, onClick, children }) => {
  const style = {
    color: '#FF5F00',
    fontSize: '10px',
  };

  return (
    <h4 style={style} onClick={onClick}>
      {children}
    </h4>
  );
};

const CheckInput = ({ check, onClick }) => {
  const style = {
    color: '#FF5F00',
    fontSize: '10px',
  };

  return <input style={style} type='checkbox' checked={check} onChange={onClick} />;
};

// const CheckBox = ({ children }) => {
//   const [check, setCheck] = useState(false);

//   const cloned_children = React.Children.map(children, (el) => {
//     const clone = React.cloneElement(el, {
//       check,
//       onClick: () => {
//         setCheck(!check);
//       },
//     });

//     return clone;
//   });

//   return <div>{cloned_children}</div>;
// };

const CheckBox = ({ children }) => {
  const [check, setCheck] = useState(false);

  const all_ = React.Children.map(children, (child) => {
    if (typeof child.type !== 'function') {
      return child; // ` if want to return all children
      // return null; // ` if want to ignore anything that is not a function
      // throw new Error('child must be a component not element'); // ` if want to throw an error
    }
    const clone = React.cloneElement(child, {
      check,
      onClick: () => {
        setCheck(!check);
      },
    });
    return clone;
  });
  return all_;
};

function App() {
  return (
    <CheckBox>
      <CheckInput />

      <Label>ok</Label>
      <Label>Hello</Label>

      <h1>Hello</h1>
    </CheckBox>
  );
}

export default App;

import { useState, useEffect, useMemo } from 'react';
import React from 'react';

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

const CheckBox = ({ children }) => {
  const [check, setCheck] = useState(false);

  const cloned_children = React.Children.map(children, (el) => {
    const clone = React.cloneElement(el, {
      check,
      onClick: () => {
        setCheck(!check);
      },
    });

    return clone;
  });

  return <div>{cloned_children}</div>;
};

function App() {
  return (
    <CheckBox>
      <CheckInput />
      <Label>ok </Label>
    </CheckBox>
  );
}

export default App;

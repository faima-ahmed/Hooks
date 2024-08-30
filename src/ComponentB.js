import React, { useContext } from 'react';
import { counterContext } from './App';

const ComponentB = () => {
    const countContext=useContext(counterContext);
    return (
        <div>
            <p>Component A</p>
      <button type="button" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
    </div>
    );
};

export default ComponentB;
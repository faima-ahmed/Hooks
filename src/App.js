import React, { useReducer } from 'react';
import CounterThree from './components/Hooks/UseReducer/CounterThree';

const initialState = 5;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;

    default:
      return state;
  }
}; 

const App = () => {
  const [count, dispatch]= useReducer(reducer, initialState);
  return (
    <div className='app'>
      <div>Count: {count}</div>
      <CounterThree/>
    </div>
  );
};

export default App;



/*
//useCallback
export default function App() {
  const [count1, setCount1]= useState(0);
  const[ count2, setCount2]= useState(0);

  const incrementByOne= useCallback(() =>{
    setCount1((prevCount) => prevCount+1);
  },[]);

  const incrementByFive = useCallback(()=>{
    setCount2((prevCount) => prevCount+5);
  },[]);

  return (
    <div className='App'>
      <Title/>
      <ShowCount count={count1} title='Counter 1'/>
      <Button handleClick={incrementByOne}>Increment by one</Button>

      <ShowCount count={count2} title='Counter 2'/>
      <Button handleClick={incrementByFive}>Increment by five</Button>
    </div>
  );
}
*/

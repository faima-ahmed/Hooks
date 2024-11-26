import React from 'react';
import CounterThree from './components/Hooks/UseReducer/CounterThree';

const App = () => {
  const [count, dispatch]
  return (
    <>
      <CounterThree/>
    </>
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

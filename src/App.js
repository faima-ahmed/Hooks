import { useState } from "react";
import Title from "./components/Title";
import ShowCount from "./components/ShowCount";
import Button from "./components/Button";

export default function App() {
  const [count1, setCount1]= useState(0);
  const[ count2, setCount2]= useState(0);

  const incrementByOne= () =>{
    setCount1((prevCount) => prevCount+1);
  };

  const incrementByFive = ()=>{
    setCount2((prevCount) => prevCount+5);
  };

  return (
    <div className='App'>
      <Title/>
      <ShowCount count={count1} title='Counter 1'/>
      <Button handleClick={incrementByOne}>Increment by one</Button>
    </div>
  );
}


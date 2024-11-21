import { useState } from "react";
import Title from "./components/Title";

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
      
    </div>
  );
}


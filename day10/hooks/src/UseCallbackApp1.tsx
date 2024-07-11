import { useEffect, useState, useCallback } from "react";

function UseCallbackApp1() {
  const [ number, setNumber ] = useState(0);
  const [ toggle, setToggle ] = useState(true);

  const someFunction = useCallback(() => {
    console.log("someFunc: number : ", number);
    return;
  }, []);

  useEffect(() => {
    console.log("렌더링");
  }, [someFunction]);

  return (
    <div>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <br/>
      <button onClick={someFunction}>Call someFunc</button>
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
    </div>
  )
}

export default UseCallbackApp1;
import { useEffect, useState, useLayoutEffect } from "react";

function UseLayoutEffectApp1() {
  const [count, setCount] = useState(0);

  const handleCountUpdate = () => {
    setCount(count + 1);
  }
  
  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect", count);
  }, [count]);
  
  return (
    <div>
      <span>count: {count}</span>
      <button onClick={handleCountUpdate}>Update</button>
    </div>
  )
}

export default UseLayoutEffectApp1;
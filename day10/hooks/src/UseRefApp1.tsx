import React, { useState, useRef, useEffect } from "react";

// 필요한, 특정한 데이터값만 업데이트 하려면
// useRef를 사용하면 된다.
const UseRefApp1 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log("랜더링", count);

  const increaseCountState = () => {
    setCount( count + 1 )
  };

  const increaseCountRef = () => {
    countRef.current += 1;
    console.log("Ref: ", countRef.current);
  }

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
};

export default UseRefApp1;
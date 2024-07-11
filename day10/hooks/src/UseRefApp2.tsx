import React, { useState, useRef, useEffect } from "react";

const UseRefApp2 = () => {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
    console.log("랜더링");
  }

  const increaseRef = () => {
    countRef.current += 1
    console.log("ref: ", countRef.current);
  }

  const increaseVar = () => {
    countVar += 1
    console.log("var: ", countVar);
  }

  const printResult = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`)
  }

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>랜더</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
      <button onClick={printResult}>Ref Var 출력</button>
    </div>
  )
}

export default UseRefApp2;
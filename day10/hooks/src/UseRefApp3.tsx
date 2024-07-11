import React, {useState, useEffect, useRef} from "react";

const UseRefApp3 = () => {
  const [count, setCount] = useState(1);
  // const [renderCount, getRenderCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    // console.log("랜더링");
    // getRenderCount(renderCount + 1);
    console.log("랜더링 수: ", renderCount.current);
    renderCount.current += 1;
  });

  return (
    <div>
      <p>Count: {count}</p>
      {/* <p>RenderCount: {renderCount}</p> */}
      <button onClick={() => {
        setCount(count + 1);
        }}>올려</button>
    </div>
  );
};

export default UseRefApp3;
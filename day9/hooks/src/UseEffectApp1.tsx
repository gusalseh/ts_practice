import React, {useState, useEffect} from "react";

function UseEffectApp1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("")

  const handleCountUpdate = () => {
    setCount(count + 1);
  }

  const handleInputUpdate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  useEffect(() => {
    console.log("렌더링");
  }, [count]);
  
  useEffect(() => {
    console.log("이름 렌더링");
  }, [name])

  // []안에 변동사항이 없으므로, useEffect 변화 x
  // useEffect(() => {
  //   console.log("렌더링");
  // }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span>count: {count}</span>
      <br/>
      <input type="text" value={name} onChange={handleInputUpdate}></input>
      <span>name: {name}</span>
    </div>
  )
}

export default UseEffectApp1;
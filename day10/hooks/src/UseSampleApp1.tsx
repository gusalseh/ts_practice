import React, {useState, useEffect} from "react";

function UseSampleApp1() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(0);
  const [input5, setInput5] = useState(0);
  const [input6, setInput6] = useState(0);
  const [input7, setInput7] = useState(0);
  const [input8, setInput8] = useState(0);

  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [result3, setResult3] = useState(0);
  const [result4, setResult4] = useState(0);

  const handleInput1 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput1(Number(e.target.value))
  }
  const handleInput2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput2(Number(e.target.value))
  }
  const handleInput3 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput3(Number(e.target.value))
  }
  const handleInput4 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput4(Number(e.target.value))
  }
  const handleInput5 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput5(Number(e.target.value))
  }
  const handleInput6 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput6(Number(e.target.value))
  }
  const handleInput7 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput7(Number(e.target.value))
  }
  const handleInput8 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput8(Number(e.target.value))
  }

  const handlePlus = () => {
    setResult1(input1 + input2);
  }

  const handleMinus = () => {
    setResult2(input3 - input4);
  }

  const handleMultiple = () => {
    setResult3(input5 * input6);
  }

  const handleDivide = () => {
    setResult4(input7 / input8);
  }

  useEffect(() => {
    console.log("렌더링");
  }, [input1, input2])

  return (
    <div>
      <input type="text" value={input1} onChange={handleInput1}></input>
      <input type="text" value={input2} onChange={handleInput2}></input>
      <button onClick={handlePlus}>+</button>
      <span>결과: {result1}</span>
      <br/>
      <input type="text" value={input3} onChange={handleInput3}></input>
      <input type="text" value={input4} onChange={handleInput4}></input>
      <button onClick={handleMinus}>-</button>
      <span>결과: {result2}</span>
      <br/>
      <input type="text" value={input5} onChange={handleInput5}></input>
      <input type="text" value={input6} onChange={handleInput6}></input>
      <button onClick={handleMultiple}>*</button>
      <span>결과: {result3}</span>
      <br/>
      <input type="text" value={input7} onChange={handleInput7}></input>
      <input type="text" value={input8} onChange={handleInput8}></input>
      <button onClick={handleDivide}>/</button>
      <span>결과: {result4}</span>
      <br/>
      
    </div>
  )
}

export default UseSampleApp1;
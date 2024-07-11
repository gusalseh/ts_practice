import { useState } from "react";

function UseStateApp2() {
  const [names, setNames] = useState([""]);
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => {
    setInput(e.target.value)
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log(prevState);
      return [input, ...prevState];
    })
  }

  console.log(input);

  return (
    <div>
      <input type='text' value={input} onChange={handleInputChange}></input>
      <button onClick={handleUpload}>upload</button>
      {
        names.map((name, idx) => {
          return <p key={idx}>{name}</p>
        })
      }
    </div>
  )
}

export default UseStateApp2;
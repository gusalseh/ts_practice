import { useState } from "react";

function UseStateApp1() {
  // const time = 0;
  const [time, setTime] = useState(11);
  const [minute, setMinute] = useState(35);

  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }

    setTime(newTime);
  };

  const handleMinuteClick = () => {
    let newMinute;
    if (minute >= 59) {
      newMinute = 1;
    } else {
      newMinute = minute + 1;
    }

    setMinute(newMinute);
  }

  return (
    <div>
      <span>현재시각: {time} 시 {minute}분</span>
      <br />
      <button onClick={handleClick}>Update</button>
      <button onClick={handleMinuteClick}>Minute Update</button>
    </div>
  )
}

export default UseStateApp1;
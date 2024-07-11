import React, {useEffect} from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중")
    }, 1000);

    // return값을 주면 종료 액션을 발생시킴
    return () => {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    }
  }, [])
  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  )
}

export default Timer;
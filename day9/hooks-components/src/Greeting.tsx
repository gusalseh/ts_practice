import React, {FC, useState, useEffect} from "react";

interface GreetingProps {
  name?: string
}
const Greeting: FC<GreetingProps> =(
  { name }: GreetingProps
) => {
  // message: 내가 만든 변수의 초기값
  // setMessage: message값을 변경할 때 사용하는 함수
  const [message, setMessage] = useState("");
  // const [age, setAge] = useState(20);
  // const [isDark, setIsDark] = useState(false);

  // useEffect: name 변수가 바뀔 때 마다,
  // if 내부의 값으로 바뀜
  // setter 개념과 유사
  // 화면이 렌더링된 다음, 실행됨
  useEffect(() => {
    if (name) {
      setMessage(`Hello from, ${name}`);
    }
  }, [name])

  if (!name) {
    return <div>no name given</div>;
  }

  return <div>{message}</div>
}

export default Greeting;
import { useEffect, useState, useLayoutEffect, useRef } from "react";

function getNumbers() {
  return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
}

function UseLayoutEffectApp2() {
  const [numbers, setNumbers] = useState([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nums: number[] = getNumbers();
    if(!nums) setNumbers(nums);
  }, [])

  useLayoutEffect(() => {
    if(numbers.length === 0) {
      return ;
    }
    if (ref.current?.scrollTop != null)
      ref.current.scrollTop = ref.current?.scrollHeight;
  }, [])
  

  return (
    <div ref={ref} style={{ height: "300px", border: "1px solid blue" }}>{numbers}</div>
  )
}

export default UseLayoutEffectApp2;
import { useRef, useCallback, useEffect } from "react";
import { Title } from "../components";
import { Button } from "../theme/daisyui";

export default function InputValueTest() {
  // 문제 풀기
  // useREf 를 inputRef 로 받기
  // useCallback 에 alert 등록하여 현재 input 값 보여주기
  // useEffect로 focus 하기

  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>InputValueTest</Title>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w-1/3 p-2">
          <input ref={undefined} className="input input-primary" />
          <Button onClick={() => {}} className="mt-4 btn-primary">
            GET VALUE
          </Button>
        </div>
      </div>
    </section>
  )
}

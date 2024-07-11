import { useRef, useCallback } from "react";
import { Title } from "../components";
import type { ValidatableInputMethods } from "../theme/daisyui";
import { ValidatableInput } from "../theme/daisyui";
import { Button } from "../theme/daisyui";

export default function ValidatableInputTest() {
  // useRef

  const validaeEmail = useCallback(() => {
    //useRef 코딩
  }, []);

  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>ValidatableInputTest</Title>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w-1/3 p-2">
          <ValidatableInput type="email" ref={undefined} className="input-primary" />
          <Button onClick={validaeEmail} className="mt-4 btn btn-primary">VALIDATE</Button>
        </div>
      </div>
    </section>
  )
}

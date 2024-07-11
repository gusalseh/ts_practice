import { useRef, useCallback, useEffect } from "react";
import { Title } from "../components";
import { Input, Button } from "../theme/daisyui";

export default function ForwardRefTest() {
  // useRef

  // useEffect

  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>ForwardRefTest</Title>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w-1/3 p-2">
          <Input ref={undefined} className="input-primary" />
          <Button onClick={() => {}} className="mt-4 btn-primary">
            GET VALUE
          </Button>
        </div>
      </div>
    </section>
  )
}

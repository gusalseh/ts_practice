import { useMemo, useCallback } from "react";
import { Title } from "../components";
import { Button } from "../theme/daisyui";
import * as D from "../data";

export default function CopyMe() {
  // onClick 의 useCallback 함수를 완성하시오.
  const onClick = useCallback(() => alert('clicked'),[]);
  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            onClick={onClick}
            className="btn-primary btn-wide btn-xs"
          >
            {name}
          </Button>
        )),
    [onClick]
  );

  return (
    <div className="mt-4">
      <Title>Callback</Title>
      <div className="flex justify-evenly mt-4">{buttons}</div>
    </div>
  );
}

import { useMemo, useCallback } from "react";
import { Title } from "../components";
import { Button } from "../theme/daisyui";
import * as D from "../data";

export default function HighOrderCallback() {
  // useCallback 함수를 완성하시오. 함수는 화살표함수를 인자로 작성하시오. 버튼을 클릭하면 alert 창이 나타나고 button 의 name 을 출력하시오.
  const onClick = useCallback((name: string) => () => alert(`${name}`), []);
  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            onClick={onClick(name)}
            className="btn-primary btn-wide btn-xs"
          >
            {name}
          </Button>
        )),
    [onClick]
  );

  return (
    <div className="mt-4">
      <Title>HighOrderCallback</Title>
      <div className="flex justify-evenly mt-4">{buttons}</div>
    </div>
  );
}

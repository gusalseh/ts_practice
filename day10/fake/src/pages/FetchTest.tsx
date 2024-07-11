import { useState, useCallback, useEffect } from "react";
import { useToggle } from "../hooks";
import { Title, Avatar, Icon } from "../components";
import { Button } from "../theme/daisyui";
import * as D from "../data";

export default function FetchTest() {
  // 원격지 API 서버에서 데이터를 가져올 때는 시간이 걸린다. 그리고 통신 오류가 발생할 수
  // 도 있다. 이 2가지를 고려할 때 API 서버에서 데이터를 가져올 때는 다음처럼 3개의 상태
  // 와 각각의 초깃값이 필요하다.
  const [loading, toggleLoading] = useToggle();
  const [randomUser, setRandomUser] = useState<D.IRandomUser | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // loading값은 초깃값이 false이므로 API 서버 접속 전에 toggleLoading()을 호출해 주면 사
  // 용자에게 현재 데이터를 가져오는 중임을 알릴 수 있다. 그리고 정상이든 비정상이든
  // API 서버로부터 무엇인가를 얻으면 finally()로 loading값을 다시 false로 만들어 준다.

  //useEffect 적용

  //prettier-ignore
  return (
    <section className="mt-4">
      <Title>FetchTest</Title>
      <div className="flex justify-center mt-4">
        <Button className="btn-sm btn-primary" onClick={()=>{}}>
          <Icon name="get_app" />
          <span>get random user</span>
        </Button>
      </div>
      {loading && (
        <div className="flex items-center justify-center">
          <Button className="btn-circle loading"></Button>
        </div>
      )}
      {/* 다음은 오류가 발생했을 때 JSX 문 작성 예이다. error는 널값일 수 있으므로 이런 패턴으
          로 코드를 작성해야 한다. */}
      {error && (
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 text-bold">{error.message}</p>
        </div>
      )}
      {/* 마찬가지 이유로 널값일 수 있는 randomUser 데이터를 고려해 다음과 같은 패턴으로 JSX 문
          을 구현한다. 참고로 조건이 있는 JSX 문을 만들 때는 {조건 && ()} 형태의 코드를 먼저 만 
          든 다음, 소괄호 안에 화면 UI를 구성하면 오류 없이 쉽게 만들 수 있다 */}
      {randomUser && (
        <div className="flex justify-center p-4 mt-4">
          <Avatar src={randomUser.picture.large} />
          <div className="ml-4">
            <p className="text-xl text-bold">
              {randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}
            </p>
            <p className="italic text-gray-600">{randomUser?.email}</p>
          </div>
        </div>
      )}
    </section>
  )
}

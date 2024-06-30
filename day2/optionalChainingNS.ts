namespace OptionalChainingNS {
  interface Wheels {
    count?: number;
  }

  interface Vehicle {
    wheels?: Wheels;
  }

  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels) {}
  }

  const car: Automobile | undefined = new Automobile({
    count: undefined,
  });
  console.log("car ", car);
  console.log("wheels ", car?.wheels);
  console.log("count ", car?.wheels?.count);

  //   // 선택적 연결 (optional chaining)을 하지 않으면 아래 삼항연산자처럼 복잡해짐
  //   const count = !car ? 0
  //   : !car.wheels ? 0
  //   : !car.wheels.count ? 0
  //   : car.wheels.count;

  // 널병합의 경우, null이나 undefined만 확인함
  const val1 = undefined;
  const val2 = 10;
  const result = val1 ?? val2;

  console.log(result);
}

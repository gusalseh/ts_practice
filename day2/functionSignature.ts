// Run의 타입은 하단의 화살 함수이다
type Run = (miles: number) => boolean;

let runner: Run = function (miles: number): boolean {
  if (miles > 10) {
    return true;
  }
  return false;
}

console.log(runner(9))
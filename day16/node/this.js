// 노드에서 this를 사용할때
// 최상위 스코프의 this는 module.exports를 가리킴
// 그 외에는 브라우저의 자바스크립트와 동일
// 함수 선언문 내부의 this는 global(전역) 객체를 가리킴
console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
  console.log("function", this === exports, this === global);
}
whatIsThis();

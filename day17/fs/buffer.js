// 버퍼: 일정한 크기로 모아두는 데이터
// 일정한 크기가 되면 한 번에 처리
// 버퍼링: 버퍼에 데이터가 찰 때까지 모으는 작업
const buffer = Buffer.from("저를 버퍼로 바꿔보세요");

// 문자열을 버퍼로 바꿈
console.log("from():", buffer);

// 버퍼의 크기 (바이트 단위)
console.log("length:", buffer.length);

// 버퍼를 다시 문자열로 바꿀 수 있음
// base64 또는 hex 인코딩 변환 가능
console.log("toString():", buffer.toString());

const array = [
  Buffer.from("띄엄 "),
  Buffer.from("띄엄 "),
  Buffer.from("띄어쓰기"),
];

// 배열 안에 든 버퍼들을 하나로 합침
const buffer2 = Buffer.concat(array);
console.log("concat():", buffer2.toString());

// 빈 버퍼 생성
// 바이트 인자 지정 -> 해당 크기의 버퍼 생성
const buffer3 = Buffer.alloc(5);
console.log("alloc():", buffer3);

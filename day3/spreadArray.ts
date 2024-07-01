namespace SpreadArray {
  const a = [1,2,3];
  const b = [4,5,6];

  // 둘다 원본값 상관없이 새로운 배열 생성
  const c = [...a, ...b];
  const d = a.concat(b);

  console.log(' a before',c);
  console.log(' b before',d);

  a.push(10);

  console.log('a',a);
  console.log(' c after',c);
  console.log(' d after',d);

}
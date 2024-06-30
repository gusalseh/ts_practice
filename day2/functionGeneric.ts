interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(arg: T): number {
  if ((arg as any).hasOwnProperty("length")) {
    return arg["length"];
  }
  return 0;
}

// console.log(getLength(22));
console.log(getLength("Hello World."));

function getLength2<T extends HasLength>(arg: T): number {
  return arg.length;
}

console.log(getLength2("Hello World."));

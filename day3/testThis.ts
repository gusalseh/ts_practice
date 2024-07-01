function myFunction() {
  console.log(this);
}

myFunction();
let test = new myFunction();

const myFunc = (title: string, message: string, number: number):boolean => {
  // console.log(title);
  // console.log(message);
  // console.log(number);
  console.log(title,message,number);
  return true;
}

myFunc("Arrow Func Test!","Title",3);

const func = ():void => console.log('func');
const func1 = () => (
  { name: 'dave' }
);
const func2 = () => {
  const val = 30;
  return val
}

console.log(func());
console.log(func1());
console.log(func2());
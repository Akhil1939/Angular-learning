function sum(a: number, b: number, c?: number): number {
  return c ? a + b + c : a + b;
}
// console.log("sum", sum(2, 3));
// console.log("sum", sum(2, 3, 4));

const sub = (a: number, b: number, c: number = 10): number => a - b - c;
// console.log("sub", sub(3, 2));
// console.log("sub", sub(3, 2, 4));

const mul = function (a: number, b: number): number {
  return a * b;
};

function sum2(a: number, b: number, ...c: number[]): number {
  let result = a + b;
  c.forEach((num) => (result += num));
  return result;
}

let numbers: number[] = [2, 3, 4, 5, 6];
// console.log("sum2", sum2(10, 30, 2, 3, 4, 5, 6));
// console.log("sum2", sum2(10, 30, ...numbers));

function sum3(a: number, b: number, ...c: number[]): number {
  return c.reduce((acc, num) => acc + num, a + b);
}
let numbers2: number[] = [2, 3, 4, 5, 6];
// console.log("sum3", sum3(10, 30, 2, 3, 4, 5, 6));
// console.log("sum3", sum3(10, 30, ...numbers2));
// console.log("sum3", sum3(10, 30, ...numbers2, 100, 200, 300));
// console.log("sum3", sum3(10, 30, 100, 200, 300, ...[2, 3, 4, 5, 6]));

//------------------ 4. generic function ------------------

function getItems<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
console.log(getItems<string>(["john", "doe"]));
console.log(getItems<number>([1, 2, 3, 4, 5, 6]));
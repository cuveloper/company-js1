console.log("-------산술연산---");

let value1 = 10;

console.log(--value1);
console.log(value1--);
console.log(value1);

console.log("-------대입연산---");

let a = 1,
  b = 2;
a += b;
// console.log("a = a + b; //" + a);

a -= b;
// console.log('a = a - b; //' + a);

a *= b;
// console.log('a = a * b; //' + a);

console.log("-------논리연산---");

let v1 = true,
  v2 = false;
let v3 = 1,
  v4 = 0;

console.log(v1 && v2, v3 && v4);
console.log(v1 || v2, v3 || v4);

console.log("-------비교연산---");

let v5 = "1",
  v6 = "false",
  v7 = "";
console.log("==");
console.log("1. true == 1", v1 == v3);
console.log("2. true == '1'", v1 == v5);
console.log("3. 1 == '1'", v3 == v5);

console.log("4. false == 0", v2 == v4);
console.log("5. false == ''", v2 == v7);
console.log("6. false == 'false'", v2 == v6);

console.log("===");
console.log("7. true === 1", v1 === v3);
console.log("8. true === '1'", v1 === v5);
console.log("9. 1 === '1'", v3 === v5);
console.log("10. true === 'true'", v1 === v6);

console.log("11. false === 0", v2 === v4);
console.log("12. false === ''", v2 === v7);
console.log("13. false === 'false'", v2 === v6);

//falsly: undefined, null, NaN, 0, -0, ""
//"false"는 falsly가 아니다. 그래서 거짓이 나온 것

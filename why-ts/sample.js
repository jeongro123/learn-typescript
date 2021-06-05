// function sum(a, b) {
//   return a + b;
// }

// // sum(10, '20'); // 1020 (30이 안나옴)
// var result = sum(10, 20);
// // result.// 단점: .쳤을때 api나 속성이 안나옴

//! "// @ts-check" : 입력시, 마치 타입스크립트를 쓴것같은 효과
//! 하지만, "JSDoc"과 "@ts-check" 를 사용하는 것보다는 TypeScript를 사용하는 것이 코드의 길이도 줄어들고 가독성이 올라간다.

/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */

function sum(a, b) {
  return a + b;
}

sum(10, 20);
sum(10, "20"); //! TS가 아니기 때문에 빨간줄을 알려주지 않는다

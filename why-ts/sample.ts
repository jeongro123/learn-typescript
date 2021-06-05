function add(a: number, b: number): number {
  return a + b;
}

var result = add(10, 20);
result.toLocaleString();
// add(10, '20'); // 장점: number type이 아닌경우 빨간줄
// VSCode Intellisense: 자동완성

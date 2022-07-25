function getPolynom(...args) {
  return (x) => [...args].reverse().reduce((acc, curr, idx) => acc + curr * x ** idx);
}

const p1 = getPolynom(2, 3, 5);
const p2 = getPolynom(1, -3);
const p3 = getPolynom(8);

console.log(p1(0), p1(2), p1(3));
console.log(p2(0), p2(2), p2(5));
console.log(p3(0), p3(2), p3(5));

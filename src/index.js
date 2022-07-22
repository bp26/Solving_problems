const data1 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32
];

function dataReverse(data) {
  let arr = [];
  for (let i = 0; i < data.length; i += 7) {
    console.log(data.splice(i, 8));
    arr.push(data.splice(i, 8));
  }
}
console.log(dataReverse(data1));

// ways to export functions (modules)

// exports.sum = (a, b) => {
//   return a + b;
// };

// exports.diff = (a, b) => {
//   return a - b;
// };
// // or
// function suming(a, b) {
//   return a + b;
// }
// exports.sum = suming;
// function differen(a, b) {
//   return a - b;
// }
// exports.diff = differen;

// ABOVE ONE IS OLD WAY , NOW SEE BY USING ECMASCRPIT

const sum = (a, b) => {
  return a + b;
};
const diff = (a, b) => {
  return a - b;
};

export { sum, diff };

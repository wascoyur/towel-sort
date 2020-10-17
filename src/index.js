
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let out = [];
  if (!matrix) {
    return out;
  }
  matrix.forEach((element, index) => {
    if (index >0 && (index+1) % 2 === 0) {
      element.reverse();
    }
    element.forEach(el => {
      out.push(el);
    })
  });
  console.log(out)
  return out;
}

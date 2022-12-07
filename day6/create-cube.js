function createCube(size) {
  let cube = [];
  for (let x = size; x > 0; x--) {
    cube.unshift(" ".repeat(size - x) + "/\\".repeat(x) + "_\\".repeat(size));
    cube.push(" ".repeat(size - x) + "\\/".repeat(x) + "_/".repeat(size));
  }
  return cube.join("\n");
}

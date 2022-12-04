export const fitsInOneBox = (boxes) =>
  boxes
    .sort((b1, b2) => b1.l - b2.l)
    .every((box, i) => i === 0 || (box.l > boxes[i - 1].l && box.w > boxes[i - 1].w && box.h > boxes[i - 1].h));

// function fitsInOneBox(boxes) {
//   return boxes
//     .sort((box1, box2) => box.l - box.l)
//     .every((currentBox, index) => {
//       if (index === 0) return true;
//       else if (
//         currentBox.l > boxes[index - 1].l &&
//         currentBox.w > boxes[index - 1].w &&
//         currentBox.h > boxes[index - 1].h
//       )
//         return true;
//       else {
//         return false;
//       }
//     });
// }

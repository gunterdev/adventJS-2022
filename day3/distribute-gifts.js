distributeGifts = (p, r) => ((r.join("").length * 2) / p.join("").length) | 0;

// distributeGifts =(packOfGifts, reindeers) => {
//   return Math.ceil(
//     packOfGifts.reduce((a,b) => a+b.length,0) /  reindeers.reduce((a,b) => a+(b.length *2),0)
//   );
// }

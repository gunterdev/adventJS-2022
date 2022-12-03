export const wrapping = (g) => g.map((g) => `${"*".repeat(g.length + 2)}\n*${g}*\n${"*".repeat(g.length + 2)}`);

// export function wrapping(gifts) {
//   return gifts.map((gift) => {
//     const asterisks = "*".repeat(gift.length + 2);
//     return `${asterisks}\n*${gift}*\n${asterisks}`;
//   });
// }

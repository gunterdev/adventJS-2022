export function wrapping(gifts) {
  return gifts.map((g) => {
    const a = "*".repeat(g.length + 2);
    return `${a}\n*${g}*\n${a}`;
  });
}

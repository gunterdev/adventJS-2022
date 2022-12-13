function getCompleted(part, total) {
  const [hPart, mPart, sPart] = part.split(":"),
    tPart = (+hPart * 60 + +mPart) * 60 + +sPart,
    [hTotal, mTotal, sTotal] = total.split(":"),
    tTotal = (+hTotal * 60 + +mTotal) * 60 + +sTotal;

  let mcd = tPart,
    tmp = tTotal;
  while (tmp) {
    const t = tmp;
    tmp = mcd % tmp;
    mcd = t;
  }

  return `${tPart / mcd}/${tTotal / mcd}`;
}

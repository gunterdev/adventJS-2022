function decorateTree(base) {
  const splitedBase = base.split(" ");
  const decorator = {
    BB: "B",
    RR: "R",
    PP: "P",
    PR: "B",
    RP: "B",
    RB: "P",
    BR: "P",
    PB: "R",
    BP: "R",
  };
  const arr = [];
  splitedBase.slice(0, -1).reduce((acc, _) => {
    acc = acc.slice(0, -1).map((_, i) => decorator[acc[i] + acc[i + 1]]);
    arr.unshift(acc.join(" "));
    return acc;
  }, splitedBase);
  return [...arr, base];
}

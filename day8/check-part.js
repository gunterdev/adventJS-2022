function checkPart(part) {
  return [...part.slice(0, part.length / 2)].every(
    (_, index) =>
      part[index] === part[part.length - 1 - index] ||
      part[index] === part[part.length - 2 - index] ||
      part[index + 1] === part[part.length - 1 - index]
  );
}

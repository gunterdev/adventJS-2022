function fixLetter(letter) {
  return letter
    .trim()
    .replace(/(\s+)/g, " ")
    .replace(/([?!])+/g, "$1")
    .replace(/\s+([?!,.])/g, "$1")
    .replace(/santa claus/gi, "Santa Claus")
    .replace(/([.?!]\s+)(.)/g, (c) => c.toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase())
    .replace(/[^?.!]$/, (c) => c + ".");
}

function countTime(leds) {
  (leds = leds.join("").split(1)), (leds[0] += leds.pop());
  return leds.sort((a, b) => b.length - a.length)[0].length * 7;
}

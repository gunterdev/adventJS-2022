function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return Math.max(
    ...giftsCities
      .sort((x, y) => y - x)
      .reduce((result, _, i) => {
        i && giftsCities.unshift(giftsCities.pop());
        i = giftsCities.slice(0, maxCities).reduce((acc, curr) => (acc += curr), 0);
        i <= maxGifts && result.push(i);
        i - giftsCities[maxCities - 1] <= maxGifts && result.push(i - giftsCities[maxCities - 1]);
        return result;
      }, []),
    0
  );
}

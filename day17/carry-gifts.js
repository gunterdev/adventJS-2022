function carryGifts(gifts, maxWeight) {
  return gifts.join(" ").match(new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, "g")) || [];
}

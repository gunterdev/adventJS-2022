function selectSleigh(distance, sleighs) {
  sleighs = sleighs.filter((x) => x.consumption * distance <= 20);
  sleighs.unshift({ name: null });
  return sleighs[sleighs.length - 1].name;
}

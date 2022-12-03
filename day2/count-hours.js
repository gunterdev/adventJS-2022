export const countHours = (y, h) =>
  h.reduce((e, h) => e + ((w = new Date(`${y}-${h}`).getDay()) < 6 && w > 0 ? 2 : 0), 0);

// function countHours(year, holidays) {
//   return holidays.reduce(
//     (extra, holiday) => extra + ((workday = new Date(`${year}-${holiday}`).getDay()) < 6 && workday > 0 ? 2 : 0),
//     0
//   );
// }

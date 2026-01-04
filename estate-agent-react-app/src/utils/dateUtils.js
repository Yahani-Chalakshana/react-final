export function parseAddedDate(added) {
  if (!added) return null;

  // Convert month name to a month index (0 = January, 11 = December)
  const monthIndex = new Date(`${added.month} 1`).getMonth();

  // Create a Date object using year, month index, and day
  return new Date(
    added.year,
    monthIndex,
    added.day
  );
}
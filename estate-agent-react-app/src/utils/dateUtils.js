export function parseAddedDate(added) {
  if (!added) return null;

  const monthIndex = new Date(`${added.month} 1`).getMonth();

  return new Date(
    added.year,
    monthIndex,
    added.day
  );
}

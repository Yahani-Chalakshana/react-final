import { parseAddedDate } from "../utils/dateUtils";

describe("parseAddedDate", () => {
  test("returns a Date object for valid input", () => {
    const result = parseAddedDate({
      month: "January",
      day: 1,
      year: 2023,
    });

    expect(result).toBeInstanceOf(Date);
  });

  test("returns null when input is null", () => {
    expect(parseAddedDate(null)).toBeNull();
  });
});
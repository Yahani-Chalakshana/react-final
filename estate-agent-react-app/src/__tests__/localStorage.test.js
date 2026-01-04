test("saves and retrieves favourites from localStorage", () => {
  const favourites = [{ id: "1", type: "House" }];

  localStorage.setItem("favourites", JSON.stringify(favourites));

  const stored = JSON.parse(localStorage.getItem("favourites"));

  expect(stored).toHaveLength(1);
  expect(stored[0].id).toBe("1");
});
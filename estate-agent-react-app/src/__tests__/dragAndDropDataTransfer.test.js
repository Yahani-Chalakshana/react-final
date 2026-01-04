describe("Drag and Drop dataTransfer logic", () => {
  test("stores and retrieves dragged property id", () => {
    
    // Mock DataTransfer object
    const dataTransfer = {
      data: {},
      setData(type, value) {
        this.data[type] = value;
      },
      getData(type) {
        return this.data[type];
      },
    };

    // Simulate drag start
    dataTransfer.setData("propertyId", "123");

    // Simulate drop
    const droppedId = dataTransfer.getData("propertyId");

    expect(droppedId).toBe("123");
  });
});
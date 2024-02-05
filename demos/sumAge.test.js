import sumAge from "./sumAge";

describe("Función suma age a Objeto", () => {
  it("sumamos 1 a la edad de un objeto con age 2", () => {
    expect(sumAge({age:2}, 1)).toEqual({age:3});
  });
});
import sumAge from "./sumAge";

describe("Función suma age a Objeto", () => {

  const demoUser = { age: 2 };

  it("sumamos 1 a la edad de un objeto con age 2", () => {
    expect(sumAge(demoUser, 1)).toEqual({age:3});
  });

  it("Restamos 1 a la edad de un objeto con age 2", () => {
    expect(sumAge(demoUser, -1)).toEqual({age:1});
  });

  it("Sumamos 0 a la edad de un objeto con age 2", () => {
    expect(sumAge(demoUser, 0)).toEqual({age:2});
  });

  it("Sumamos a a la edad de un objeto con age 2", () => {
    expect(sumAge(demoUser, 'a')).toEqual({age:2});
  });


});

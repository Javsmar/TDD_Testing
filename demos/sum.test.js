const sum = require('./sum');

describe("Función suma", () => {

  afterAll(() => {
    console.log("TEST INIT");
  });
  beforeAll(() => {
    console.log("TEST FINAL");
  });

  it('Función suma 1 y 1 es 2', () => {
    expect(sum(1, 1)).toBe(2);
  });

  describe("Suma números positivos", () => {
    it('sumar 1 + 2 es igual a 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
    
    it('sumar 3 + 4 es igual a 7', () => {
      expect(sum(3, 4)).toBe(7);
    });
  })
  describe("Suma números negativos", () => {
    it("sumar 2 y -3 es igual a -1", () => {
      expect(sum(2, -3)).toBe(-1);
    });
  })

  describe("Suma de números decimales", () => {
    it("Should return 0.3 when add 0.1 and 0.2", () => {
      expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 9);
    })
  })

  describe("Operaciones con otros tipos", () => {
    test.todo("sumar números con letras");
  })

});
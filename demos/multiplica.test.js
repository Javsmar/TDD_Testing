const multiplica = require('./multiplica');

describe("Función multiplica", () => {
  it('Función multiplica 2 * 2 es 4', () => {
    expect(multiplica(2, 2)).toBe(4);
  })
});
import avg from './avg';

describe("Media de valores positiovos", () => {
  it("Valor me dio de 1,2,2,1 es 1.5", () => {
    expect(avg([1,2,2,1])).toBe(1.5);
    expect(avg([1,2,2,4])).toBeGreaterThan(0);
    expect(avg([1,2,2,4])).toBeCloseTo(2, 0);
    
  });
})


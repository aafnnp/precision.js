import { add, subtract, multiply, divide } from '../src';

describe('add function', () => {
  it('should return the correct result when all args are numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
    expect(add(1, 2, 3)).toBeCloseTo(6, 10);
    expect(add(-1, 2, -3)).toBeCloseTo(-2, 10);
  });

  it('should return null when any arg is null or undefined', () => {
    expect(add(0.1, null, 0.2)).toBeNull();
    expect(add(undefined, 0.1, 0.2)).toBeNull();
    expect(add(0.1, 0.2, undefined)).toBeNull();
    expect(add(null, null)).toBeNull();
  });
});

describe('subtract function', () => {
  it('should return the correct result when all args are numbers', () => {
    expect(subtract(0.3, 0.1)).toBeCloseTo(0.2, 10);
    expect(subtract(1, 2, 3)).toBeCloseTo(-4, 10);
    expect(subtract(-1, 2, -3)).toBeCloseTo(0, 10);
  });

  it('should return null when any arg is null or undefined', () => {
    expect(subtract(undefined, 0.1)).toBeNull();
    expect(subtract(0.3, null, 0.1)).toBeNull();
    expect(subtract(0.3, 0.1, undefined)).toBeNull();
    expect(subtract(null, null)).toBeNull();
  });

  it('should return null when there is only one arg', () => {
    expect(subtract(1)).toBeNull();
  });
});

describe('multiply function', () => {
  it('should return the correct result when all args are numbers', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 10);
    expect(multiply(2, 3, 4)).toBeCloseTo(24, 10);
    expect(multiply(-2, 3, -4)).toBeCloseTo(24, 10);
  });

  it('should return null when any arg is null or undefined', () => {
    expect(multiply(undefined, 0.1)).toBeNull();
    expect(multiply(0.1, null, 0.2)).toBeNull();
    expect(multiply(0.1, 0.2, undefined)).toBeNull();
    expect(multiply(null, null)).toBeNull();
  });
});

describe('divide function', () => {
  it('should return the correct result when all args are numbers', () => {
    expect(divide(0.3, 0.1)).toBeCloseTo(3, 10);
    expect(divide(24, 3, 4)).toBeCloseTo(2, 10);
    expect(divide(-24, 3, -4)).toBeCloseTo(2, 10);
    expect(divide(1, 3, 4)).toBeCloseTo(0.0833333333, 10);
  });

  it('should return null when any arg is null or undefined', () => {
    expect(divide(undefined, 0.1)).toBeNull();
    expect(divide(0.3, null, 0.1)).toBeNull();
    expect(divide(0.3, 0.1, undefined)).toBeNull();
    expect(divide(null, null)).toBeNull();
  });

  it('should return null when there is only one arg', () => {
    expect(divide(1)).toBeNull();
  });
});

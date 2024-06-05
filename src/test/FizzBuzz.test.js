import { processValue, getDivisions } from '../FizzBuzz';

describe('FizzBuzz Logic', () => {

  it('should return "Fizz" for multiples of 3', () => {
    expect(processValue(9)).toBe('Fizz');
  });

  it('should return "Buzz" for multiples of 5', () => {
    expect(processValue(10)).toBe('Buzz');
  });

  it('should return "FizzBuzz" for multiples of 3 and 5', () => {
    expect(processValue(15)).toBe('FizzBuzz');
  });

  it('should return the value itself for non-divisible numbers', () => {
    expect(processValue(7)).toBe("7");
  });

  // Simulate division tracking (replace with actual testing)
  it('should get tracked divisions if available', () => {
    processValue.trackedDivisions = new Set([3, 5]);
    expect(getDivisions()).toEqual(["Divided 9 by 3", "Divided 10 by 5",
    "Divided 15 by 3", "Divided 15 by 5"]);
    processValue.trackedDivisions = undefined; // Clear for other tests
  });
});

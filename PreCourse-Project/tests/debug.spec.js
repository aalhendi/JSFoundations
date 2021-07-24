import { generateIntegersArray, noZeroes } from "../debug";

describe("generateIntegersArray(firstNumber, lastNumber)", () => {
  test("returns an array of numbers between the two numbers passed as parameters.", () => {
    const firstNumber = 4;
    const lastNumber = 13;
    const res = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    expect(generateIntegersArray(firstNumber, lastNumber)).toEqual(res);
  });
});

describe("noZeroes(numberString)", () => {
  test("doesn't remove zeros in the middle.", () => {
    const numberString = "0010100";
    const zeroless = "101";
    expect(noZeroes(numberString)).toEqual(zeroless);
  });

  test("returns the number without zeroes at the end or the beginning.", () => {
    const numberString = "00100";
    const zeroless = "1";
    expect(noZeroes(numberString)).toEqual(zeroless);
  });
});

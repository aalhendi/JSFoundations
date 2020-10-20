/**************************
 *
 * THIS IS A TESTING FILE
 *
 * DO NOT MODIFY THIS FILE
 *
 ***************************/

import {
  oddOrEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
} from "./arrayFunctions";

describe("oddOrEven(numbers)", () => {
  test("returns 'odd' if numbers has an odd number of elements", () => {
    expect(oddOrEven([1, 2, 3])).toEqual("odd");
  });
  test("returns 'even' if numbers has an even number of elements", () => {
    expect(oddOrEven([1, 2, 3, 4])).toEqual("even");
  });
});

describe("addLailaToArray(tutors)", () => {
  test("returns an array equal to the provided one but with 'Laila' at the end", () => {
    expect(addLailaToArray(["Mshary", "Hasan"])).toEqual([
      "Mshary",
      "Hasan",
      "Laila",
    ]);
  });
});

describe("eliminateTeam(teams)", () => {
  test("returns the last element of the array", () => {
    expect(eliminateTeam(["Brazil", "Germany", "Italy"])).toEqual("Italy");
  });
});

describe("secondHalfOfArrayIfItIsEven(array)", () => {
  test("returns the second half of the array if it has an even number of elements", () => {
    expect(
      secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"])
    ).toEqual(["banana", "kiwi"]);
  });
  test("returns empty array if provided array has an odd number of elements", () => {
    expect(
      secondHalfOfArrayIfItIsEven([
        "apple",
        "orange",
        "banana",
        "kiwi",
        "blueberry",
      ])
    ).toEqual([]);
  });
});

describe("youGottaCalmDown(s)", () => {
  test("returns the string `s` with at most one exclamation mark (!) at the end.", () => {
    const s = "Gotta Get Tay-Tay Schwifty!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
    const res = "Gotta Get Tay-Tay Schwifty!";
    expect(youGottaCalmDown(s)).toEqual(res);
  });
});

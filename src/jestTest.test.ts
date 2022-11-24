import { getError, numberAdd, objectAdd } from "./jestTest";

test("result should be 3", () => {
  expect(numberAdd(1, 2)).toBe(3);
});

// ignore undefined
test("return arg as object", () => {
  expect(objectAdd("sam", 100, undefined)).toEqual({ name: "sam", age: 100 });
});

// // recomend way to test
// test("return arg as object", () => {
//   expect(objectAdd("sam", 100, undefined)).toStrictEqual({
//     name: "sam",
//     age: 100,
//   });
// });

test("null", () => {
  expect(null).toBeNull();
});

//false test
test("0 is false", () => {
  expect(numberAdd(1, -1)).toBeFalsy();
});

//true test
test("2 is true", () => {
  expect(numberAdd(1, 1)).toBeTruthy();
});

//length test
test("array length <= 10", () => {
  const array = Array(10).fill(null);
  expect(array.length).toBeLessThanOrEqual(10);
});

test("array length should be 4", () => {
  const array = Array(4).fill(null);
  //ToBe is okay to use
  expect(array.length).toEqual(4);
});

// tweek number decimal add
test("0.1 + 0.2 = 0.3", () => {
  // received  0.30000000000000004 should use toBeCloseTo instead of toBe
  expect(numberAdd(0.1, 0.2)).toBeCloseTo(0.3);
});

//string test
test("Dose `Hello World` have letter `o`?", () => {
  // `i` should check lower case and upper case both
  expect("Hello Wolrd").toMatch(/o/i);
});

// array test
test("Does array has Mike?", () => {
  const user = "Mike";
  const userList = ["Sam", "Mike", "Jay"];
  expect(userList).toContain(user);
});

// Error test
test("Is Error fired?", () => {
  expect(() => getError()).toThrow("bug!");
});

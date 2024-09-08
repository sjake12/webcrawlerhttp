const { sortPages } = require("./report.js");
const { test, expect } = require("@jest/globals");

test("sortPages", () => {
  const input = {
    "https://wagslane.dev/path": 1,
    "https://wagslane.dev": 3,
    "https://wagslane.dev/path2": 5,
    "https://wagslane.dev/path3": 2,
    "https://wagslane.dev/path4": 9,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://wagslane.dev/path4", 9],
    ["https://wagslane.dev/path2", 5],
    ["https://wagslane.dev", 3],
    ["https://wagslane.dev/path3", 2],
    ["https://wagslane.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});

import { isZero } from "./isZero";

test("to be true", () => {
  expect(isZero(0)).toBe(true);
});

test("to be false", () => {
  expect(isZero(1)).toBe(false);
});

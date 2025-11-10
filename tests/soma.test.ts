import { soma } from "../src/soma";

test("soma básica", () => {
  expect(soma(2, 2)).toBe(4);
});

test("soma com números negativos", () => {
  expect(soma(-5, 10)).toBe(5);
});

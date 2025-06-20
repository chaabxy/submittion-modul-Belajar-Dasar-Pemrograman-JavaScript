import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("Testing Positive", () => {
  // Arrange
  const angka1 = 1;
  const angka2 = 2;

  // Action
  const hasilAkhirPositive = sum(angka1, angka2);

  // Assert
  const hasilHarapanPositive = 3;
  assert.strictEqual(hasilAkhirPositive, hasilHarapanPositive);
});
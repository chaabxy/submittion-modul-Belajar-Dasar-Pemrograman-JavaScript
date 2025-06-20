import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js"; // Menggunakan default import karena sum diekspor sebagai default

// Test untuk angka positif
test("Testing Positive Numbers", () => {
  const angka1 = 5;
  const angka2 = 10;
  const hasilAkhir = sum(angka1, angka2);
  const hasilHarapan = 15;
  assert.strictEqual(hasilAkhir, hasilHarapan);
});

// Test untuk salah satu angka negatif
test("Testing Negative Numbers", () => {
  const angka1 = -3;
  const angka2 = 7;
  const hasilAkhir = sum(angka1, angka2);
  const hasilHarapan = 0; // Karena ada angka negatif, harus return 0
  assert.strictEqual(hasilAkhir, hasilHarapan);
});

// Test untuk kedua angka negatif
test("Testing Both Negative Numbers", () => {
  const angka1 = -5;
  const angka2 = -8;
  const hasilAkhir = sum(angka1, angka2);
  const hasilHarapan = 0;
  assert.strictEqual(hasilAkhir, hasilHarapan);
});

// Test jika input bukan angka (string)
test("Testing Non-Numeric Input (String)", () => {
  const angka1 = "5";
  const angka2 = 3;
  const hasilAkhir = sum(angka1, angka2);
  const hasilHarapan = 0;
  assert.strictEqual(hasilAkhir, hasilHarapan);
});

// Test jika input bukan angka (null)
test("Testing Non-Numeric Input (Null)", () => {
  const angka1 = null;
  const angka2 = 3;
  const hasilAkhir = sum(angka1, angka2);
  const hasilHarapan = 0;
  assert.strictEqual(hasilAkhir, hasilHarapan);
});

// Test jika input bukan angka (undefined)
test("Testing Non-Numeric Input (Undefined)", () => {
  const angka1 = undefined;
  const angka2 = 3;
  const hasilAkhir = sum(angka1, angka2);
  const hasilHarapan = 0;
  assert.strictEqual(hasilAkhir, hasilHarapan);
});

// Test jika salah satu angka adalah 0
test("Testing Zero Value", () => {
  const angka1 = 0;
  const angka2 = 5;
  const hasilAkhir = sum(angka1, angka2);
  const hasilHarapan = 5;
  assert.strictEqual(hasilAkhir, hasilHarapan);
});

// Test untuk kedua angka 0
test("Testing Both Zero Values", () => {
  const angka1 = 0;
  const angka2 = 0;
  const hasilAkhir = sum(angka1, angka2);
  const hasilHarapan = 0;
  assert.strictEqual(hasilAkhir, hasilHarapan);
});

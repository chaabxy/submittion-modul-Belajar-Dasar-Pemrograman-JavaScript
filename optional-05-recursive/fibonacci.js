function fibonacci(n, memoization = {}) {
  if (n in memoization) return memoization[n];
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const prevFib = fibonacci(n - 1, memoization);
  memoization[n] = [
    ...prevFib,
    prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2],
  ];

  return memoization[n];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;

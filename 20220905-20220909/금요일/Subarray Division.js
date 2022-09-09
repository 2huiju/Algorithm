function birthday(s, d, m) {
  // Write your code here
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, m + i).reduce((a, b) => a + b) === d) count++;
  }

  return count;
}

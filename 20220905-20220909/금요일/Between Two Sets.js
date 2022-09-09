function getTotalX(a, b) {
  // Write your code here
  let answer = 0;
  let min = Math.max(...a);
  let max = Math.min(...b);

  for (let i = min; i <= max; i++) {
    if (a.every((el) => i % el === 0)) {
      if (b.every((el) => el % i === 0)) answer++;
    }
  }

  return answer;
}

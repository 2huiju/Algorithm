function solution(sizes) {
  let dd = sizes.map((el) => el.sort((a, b) => b - a)[0]);
  let cc = sizes.map((el) => el.sort((a, b) => b - a)[1]);

  return Math.max(...dd) * Math.max(...cc);
}

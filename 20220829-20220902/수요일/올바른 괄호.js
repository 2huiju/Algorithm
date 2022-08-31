function solution(s) {
  let arr = [];

  for (let i of s) {
    if (i === "(") arr.push("(");
    if (i === ")") {
      if (arr.length === 0) return false;
      arr.pop();
    }
  }
  return arr.length === 0;
}

function migratoryBirds(arr) {
  // Write your code here
  let array = arr
    .sort((a, b) => a - b)
    .reduce(
      (i, j) => {
        i[j - 1]++;
        return i;
      },
      [0, 0, 0, 0, 0]
    );

  return array.findIndex((i) => i === Math.max(...array)) + 1;
}

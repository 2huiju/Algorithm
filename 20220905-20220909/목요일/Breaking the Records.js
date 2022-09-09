function breakingRecords(scores) {
  // Write your code here
  let min = [scores[0]];
  let min_count = 0;
  let max = [scores[0]];
  let max_count = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max[max.length - 1]) max.push(scores[i]) && max_count++;
    else if (scores[i] < min[min.length - 1])
      min.push(scores[i]) && min_count++;
  }

  return [max_count, min_count];
}

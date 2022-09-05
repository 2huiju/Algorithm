function gradingStudents(grades) {
  // Write your code here
  let answer = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      if ((grades[i] + 2) % 5 === 0) answer.push(grades[i] + 2);
      else if ((grades[i] + 1) % 5 === 0) answer.push(grades[i] + 1);
      else answer.push(grades[i]);
    } else answer.push(grades[i]);
  }
  return answer;
}

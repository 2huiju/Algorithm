function bonAppetit(bill, k, b) {
  bill.splice(k, 1);
  let money = bill.reduce((a, b) => a + b) / 2;

  if (money === b) console.log("Bon Appetit");
  else console.log(b - money);
}

// 처음엔 이렇게 풀었는데 filter 때문에 배열 순회하는데 오래걸려서 인풋값이 몇천개일 경우 시간초과가 남
// 그래서 splice 로 변경해줌
function bonAppetit(bill, k, b) {
  // Write your code here
  let money = bill.filter((el) => el !== bill[k]).reduce((a, b) => a + b) / 2;

  if (money === b) return "Bon Appetit";
  else return b - money;
}
bonAppetit([3, 10, 2, 9], 1, 12);

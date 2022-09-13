function bonAppetit(bill, k, b) {
  bill.splice(k, 1);
  let money = bill.reduce((a, b) => a + b) / 2;

  if (money === b) console.log("Bon Appetit");
  else console.log(b - money);
}

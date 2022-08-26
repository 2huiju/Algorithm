// myShooping은 내가 구매한 목록을 보여주고 있습니다.
// 해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 
// "의류"를 구매한 횟수에 따라 등급을 나타내세요.

// 등급표
// "0~2"  ⇒ Bronze
// "3~4" ⇒ Silver
// 5이상 ⇒ Gold

// **`입력 인자`**
// - X

// **`주의 사항`**
// - 반복문을 통해 문제를 풀어야 합니다.
// - myShopping 내용을 직접 수정하면 안 됩니다.
// - 예상 결과에 나온 문구와 형식이 같아야 합니다.

//의류룰 구매한 횟수와 총 금액 나타내기
//의류룰 구매한 횟수[i], 총 금액[j], 등급[k]
// 1. 목록의 카테고리중 의류 찾아서 개수 세기
// 2. 찾은 의류의 개수만큼 등급 매기기
// 2. 의류의 가격 더하기

const myShopping = [
    { category: "과일", price: 12000},
    { category: "의류", price:10000},
    { category: "의류", price: 20000},
    { category: "장난감", price: 9000},
    { category: "과일", price: 5000},
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000},
    { category: "의류", price: 7000},
    { category: "장난감", price: 5000},
    { category: "의류", price: 10000},
]

let count = 0 //내가 구매한 총 횟수
let amount = 0 //내가 구매한 총 금액
let grade = "" //등급


for ( let i = 0; i < myShopping.length;  i++) {
    if (myShopping[i].category === "의류") {
        count ++
        amount += myShopping[i].price
    }
}

if (count >= 5) {
    grade = "Gold"
}
    else if (count >= 3) {
        grade = "Silver"
    }	else {
            grade = "Bronze"
        }

console.log("의류를 구매한 횟수는 총 " + count+"회 금액은 " +amount+"이며 등급은" +grade+"입니다.")
console.log(`의류를 구매한 횟수는 총 ${count}회 금액은 ${amount}원이며 등급은 ${grade}입니다.`)
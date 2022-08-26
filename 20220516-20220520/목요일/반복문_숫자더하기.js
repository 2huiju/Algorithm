
// 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.
// num은 1이상의 자연수가 들어옵니다.
// 만약 num이 5라면 1 + 2 + 3 + 4 + 5를 모두 더한 값을 출력시켜주세요.

// **`입력 인자`**
// - num은 1이상의 자연수 입니다.

// **`주의 사항`**
// - for을 이용해서 문제를 풀어야 합니다.


// function sum(num) {
//     let count = 0
    
//     for(let i = 1; i <= num; i = i+1) {
//       count = count + i;
//     }
//     console.log(count)
//   }


function sum(num) {
    let count = 0
    
    for(let i = 1; i <= num; i = i++) {
        count += i;
    }
    console.log(count)
}

sum(5)


// i ++  은 i + 1 이랑 똑같고, count = count+i 는 count += i랑 똑같음 
// 피보나치 수
// 문제 설명
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

// 예를들어

// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

// 제한 사항
// n은 2 이상 100,000 이하인 자연수입니다.
// 입출력 예
// n	return
// 3	2
// 5	5
// 입출력 예 설명
// 피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.

// 내가 푼 것
function solution(n) {
    let answer = ss(n) % 1234567
    return answer
  
    function ss(v) {
  
      let dd = []
  
      dd[0] = 0
      dd[1] = 1
      dd[2] = 1
  
      for(let i=3; i<=v; i++) {
        dd[i] = (dd[i-1]%1234567 + dd[i-2]%1234567)
      }
      return dd[v]
    }
  }

// reference1
function solution(n) {
  // 피보나치 수의 결과를 저장하는 배열
    const answer = [0,1]
    
    for(let i=2; i<=n; i++) {
        answer[i] = (answer[i-1]+ answer[i-2]) % 1234567
    }
    return answer[n]
}

// Number.MAX_SAFE_INTEGER 
// 여기까지만 int 범위 안이야 !

// Number.isSafeInteger(2 ** 53 - 1)
// return true

// (A + B) % C === ((A % C) + (B + C)) % C

// reference2
function solution(n) {
  let prev = 0 // 0번째 피보나치 수의 결과
  
  return new Array(n-1)
              .fill(1)
              .reduce(acc => {
                  const sum = (prev + acc)
                  prev = acc
                  
                  return sum % 1234567
              //cur값 없이 누적값만 이용해서 문제 풀기
  }, 1) // 1번째 피보나치 수의 결과를 초기값으로 사용
}

// 피보나치는
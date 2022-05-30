// 정수 제곱근 판별

// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

// 입출력 예
// n	return
// 121	144
// 3	-1

// 입출력 예 설명
// 입출력 예#1
// 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

// 입출력 예#2
// 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

//내가 푼 것
function solution(n) {
    
    //n이 양의정수 x의 제곱이면 x+1 의 제곱을 리턴
    if(Math.sqrt(n) % 1 === 0) {
        return ((Math.sqrt(n)+1) ** 2)
    } else return -1
    //n이 양의정수 x의 제곱이 아니라면 -1을 리턴
    
}
// Math.sqrt() = 루트
// Math.pow() = 제곱구하기

//reference
function solution(n) {
    
    for(let i = 1; i * i <= n; i++) {
        if(i*i === n) {
            return(i+1) * (i+1)
        } else return -1
    }
    
}

//reference2
function solution(n) {
    
    let answer = Math.sqrt(n)

    //정수인지 아닌지 확인해주는 메서드
    if(Number.isInteger(answer)) {
        answer++
        return answer ** 2
    }
    return -1
}

//reference3
function solution(n) {
    let answer = Math.sqrt(n)
    if(n % answer === 0) {
        answer++
        return answer ** 2
    } else return -1
}

//제곱 구하는 방법
11 * 11 * 11 
// 1331
11 ** 3
// 1331
11 ** 2
// 121

// Math.pow()
Math.pow(2,3)
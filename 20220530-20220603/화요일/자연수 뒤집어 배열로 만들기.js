// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

// 내가 푼 것
function solution(n) {

    const dd = (n + "").split('').map(n => +n).reverse()
    
    return dd;
}

//n은 지금 number type 이기 때문에 인덱스로 접근이 불가능함
//n을 문자열로 바꿔주면 인덱스로 접근 가능
const answer = []
n = String(n)
console.log(n, typeof n)

//문자열로 변환을 도와주는 메서드 = toString
//근데 toString은 변수에만 할당 가능함
//기존에 있던 string과 다른 기능이 있음
num = 123
String(num)
num.toString()
console.log(n, typeof n, n[0])

// reference1

//i를 맨 뒷글자부터 시작해서 맨 앞글자까지 데이터를 가지고와서,
//숫자로 다시 변환해서 push 해줌
function solution(n) {
    
    const answer = []
    n = String(n)
    for(let i = n.length-1; i>=0; i--) {
        answer.push(Number(n[i]))
    }
return answer
}


//reference2
function solution(n) {
    
    return n.toString().split("").reverse().map(num=> {return Number(num)})
}
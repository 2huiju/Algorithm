// 약수의 합
// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, 
//solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

//내가푼것
function solution(n) {
    var answer = 0;
    
    for (let i =1; i<=n; i++) {
        if (n % i === 0) {
            answer += i
        }
    }
    
    return answer;
}


//reference
function solution(n) {
    var answer = n
    //자기자신은 자기자신의 약수이니까

    for (let i = 1; i <= n/2; i++ ) {
        //자기자신의 반값 넘어서부터는 더이상 약수가 없으니까 if(n % i === 0) {
        answer += i
    }
}


//reference2
function solution(n) {
    const answer = new Array(n).fill(n).reduce((acc,cur,i) => {
        const num = cur + i 
        return acc + ( n % num === 0
            ? num //약수가 맞다면 
            : 0 //약수가 맞다면
            )
        },0
        )
    return answer
    }



// .reduce((acc,cur))
        //누적값, 현재값

//reference
arr = new Array(10)
//10개만큼의 빈 배열 생성
arr.length 
//10 출력

arr = new Array(10).fill(1)
// [1,1,1,1,1,1,1,1,1,1]


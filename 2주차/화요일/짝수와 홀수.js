// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

//내가 푼 것
function solution(num) {
    var answer = '';
    
    if (num % 2 === 0) {
        answer = "Even"
    } else answer = "Odd"
    
    return answer;
}



//짝수 : 2로 나눴을 때 나머지 값이 0일 때
//홀수 : 2로 나눴을 때 나머지 값이 1일 때

//reference
function solution(num) {
    
    if (num % 2 === 0) {
        return "Even"
    } else return "Odd"

}


function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd"
    //삼항연산자의 값이     true    false  일 때
}

//삼항연산자는 길어지는 코드를 짧게 만든다
//삼항연산자는 꼭 한 번만 사용 하기 !
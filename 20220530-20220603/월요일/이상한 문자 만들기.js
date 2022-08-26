// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// 입출력 예
// s	return
// "try hello world"	"TrY HeLlO WoRlD"

// 입출력 예 설명
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
// 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

// 내가 시도한것 ㅜ ㅜ
function solution(s) {

    var answer = []
    var sp = s.split(' ')
    
    
    for(let i=0; i<sp.length; i++) {
        if(i% 2 === 0) {
            answer.push(sp[i].toUpperCase())
        } if (i% 2 !== 0) {
            answer.push(sp[i].toLowerCase())
        }
    }
    
    return answer.join("");
}

//reference
function solution(s) {

    var answer = []
    let idx = 0
    //공백을 만날때마다 idx를 초기화
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === ' ') {
            answer += " "
            //공백을 만나면 answer에 공백을 채워주고
            idx = 0
            //idx를 0으로 바꿔줌
        } else {
            answer += idx%2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase()
            //공백이 없다면, idx의 인덱스가 짝수라면 대문자로 바꾸고, 홀수라면 소문자로 바꿔준다
            idx ++
        }
    }
    return answer
}

//reference2
function solution(s) {
    const answer = s.split(' ').map(word => word.split("").map((letter, i) => {
        return i%2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('')).join(' ')
    return answer
}
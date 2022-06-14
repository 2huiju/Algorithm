// 시저 암호
// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

// 입출력 예
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"

function solution(s, n) {
    var answer = '';
    
    let low = 'abcdefghijklmnopqrstuvwxyz'
    let upp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    for(let i=0; i<s.length; i++) {
    
    if(s[i] === " ") {
        answer += " "
    } else {
        
        let upplow = upp.includes(s[i]) ? upp : low;
        let index = upplow.indexOf(s[i])+n
        
            
        if (index >= upplow.length) {
            index -= upplow.length
        }
            
        answer += upplow[index]
    }
    }
    
    return answer;
}

// reference 
let low = 'abcdefghijklmnopqrstuvwxyz'
let upp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function solution(s, n) {
    return s.split("")
            .reduce((acc,cur) => {
                const word = low.includes(cur) ? low : upp
                let idx = word.indexOf(cur) + n
                
                if( idx >= 26) {
                    idx -= 26
                }
                
                return acc + (cur === " " ? " " : word[idx])
            }, "")
}


// reference2
function solution(s, n) {
    let answer = ""
    
    for(let i=0; i<s.length; i ++) {
        
        if (s[i] === " ") {
            answer += " "
            continue
        }
        let code = s[i].charCodeAt() + n
        if (code > 122 || (code > 90) && (code -n) < 97) {
            // 소문자 z(122)를 초과하거나
            // 대문자 z(90)을 초과하면서
            // 기존의 유니코드 번호가 대문자일 경우
            code -= 26
        }
        answer += String.fromCharCode(code)
    }
    return answer
}

// 아스키 코드
"a".charCodeAt()
"z".charCodeAt()

"A".charCodeAt()
"Z".charCodeAt()

"a".charCodeAt() + 1
String.fromCharCode("a".charCodeAt() + 1)
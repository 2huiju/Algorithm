// 문자열 내림차순으로 배치하기

// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.

// 입출력 예
// s	return
// "Zbcdefg"	"gfedcbZ"

//풀이 1
function solution(s) {
    const arr = []
    let answer = ""
    
    for(let i=0; i<s.length; i++) {
        arr.push(s[i])
    }
    arr.sort((a,b)=> a>b ? -1 : 1)
    for(let i=0; i<arr.length; i++) {
        answer += arr[i]
    }
    return answer
}

//풀이 2
function solution(s) {
    const answer = s.split('').sort((a,b)=> a>b ? -1:1).join("")
    return answer
}


//sort, fromCharCode 메서드
const arr = [10,9,1,7,97,102]
arr.sort()
//sort : (맨 앞글자를)기본값으로 오름차순 정렬
//[ 1, 10, 102, 7, 9, 97 ]
arr.sort((a,b)=> a-b)
//이렇게 하면 오름차순으로 정렬 (sort는 원본배열 해침)
//[ 1, 7, 9, 10, 97, 102 ]
arr.sort((a,b)=> b-a)
//내림차순으로 정렬
//[ 102, 97, 10, 9, 7, 1 ]
//부등호 정렬은 숫자에서만 사용가능!!

//array가 문자열이라면?
const arr2 = ['a','b','Z','A','z','f']
arr2.sort((a,b)=> a < b? -1 : 1)
//오름차순 정렬
//[ 'A', 'Z', 'a', 'b', 'f', 'z' ]

String.fromCharCode(97)
//'a'

String.fromCharCode(65)
//'A'

//대문자는 소문자보다 유니코드상에서 앞에 있기 때문에
//대문자는 소문자보다 작은 값을 가진다
//그래서 오름차순을 할 때는 소문자가 뒤로 가게되고
//내림차순을 하면 대문자가 뒤로 가게된다
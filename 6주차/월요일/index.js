// 완주하지 못한 선수
// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
// 입출력 예
// participant	completion	return
// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
// 입출력 예 설명
// 예제 #1
// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #2
// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #3
// "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

// 내가 푼 것
function solution(participant, completion) {
    var answer = '';
    // 참여자, 완주자 명단
    
    participant.sort()
    completion.sort()
    
    for(let i=0; i<participant.length; i++) {
        if(participant[i] !== completion[i]) {
            answer = participant[i]
            return answer
        }
    }
}

// reference1
function solution(participant, completion) {
    const answer = {}
    
    // 1.참가한 선수의 이름과 수를 정리
    for(let i=0; i<participant.length; i++) {
        answer[ participant[i]] === undefined
        ? answer[participant[i]] = 1
        : answer[participant[i]]++

    }
    // 2.참가자 명단에서 완주한 사람의 이름을 제거
    for(let i=0; i<completion.length; i++) {
        answer[completion[i]] --
    }
    
    // 3.완주하지 못한 선수 찾기
    for(let key in answer) {
        if(answer[key] !== 0) return key
    }
}

// reference 2
function solution(participant, completion) {
    participant.sort()
    completion.sort()
    
    return participant.filter((name, i) => {
        return name !== completion[i] 
    })[0]
}


arr = [1,2,3,4,5]

// arr.pop()
// arr.shift()

// splice
// 1. 배열 메서드
// 2. 원하는 구간의 데이터를 삭제할 수 있다.
// 3. 원하는 구간에 데이터를 추가할 수 있다.
// 4. 원본이 저장된다.

arr.splice(2,1)
// 두번째 인덱스로부터 1개만 지울거야 !
// 내가 지운 데이터를 리턴값으로 보여줌

arr // [1,2,4,5]

arr.splice(2,1,0)
// 두번째 인덱스로부터 0을 1개만 추가할거야!
arr.splice(2,0,0,-1,-2,-3)
// 두번째 인덱스로부터 삭제하지않고 0,-1,-2,-3을 추가할거야
arr


// Map

// 1. 객체와 비슷한 역할을 하는 자료구조
// 2. 키와 밸류로 데이터를 관리한다.

obj = {}
obj2 = new Map()

// 데이터를 추가
obj.name = "철수"
obj2.set("name", "철수")
// 기존 방식과 똑같음

// 데이터를 조회
obj.name
obj2.get("name")

// 반복
for(let key in obj) {
  console.log(key, obj[key])
}
obj2.forEach((value, key) => {
  console.log(value, key)
})

// 삭제
delete obj.name
obj
obj2.delete("name")
obj2

// 초기화
obj = {}
obj2.clear()
obj2

// 맵의 장점
// 1. 객체의 크기를 바로 가져올 수 있다
obj = {name: "철수", age: 12}
let count = 0
for(let key in obj) {
  count++
}
console.log(count)

obj2 = new Map()

obj2.set("name", "철수")
obj2.set("age", 12)
obj2.size

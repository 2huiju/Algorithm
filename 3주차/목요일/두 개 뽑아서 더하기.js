// 두 개 뽑아서 더하기
// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

// 입출력 예
// numbers	result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]

// 입출력 예 설명

// 입출력 예 #1
// 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
// 3 = 2 + 1 입니다.
// 4 = 1 + 3 입니다.
// 5 = 1 + 4 = 2 + 3 입니다.
// 6 = 2 + 4 입니다.
// 7 = 3 + 4 입니다.
// 따라서 [2,3,4,5,6,7] 을 return 해야 합니다.

// 입출력 예 #2
// 2 = 0 + 2 입니다.
// 5 = 5 + 0 입니다.
// 7 = 0 + 7 = 5 + 2 입니다.
// 9 = 2 + 7 입니다.
// 12 = 5 + 7 입니다.
// 따라서 [2,5,7,9,12] 를 return 해야 합니다.

//내가 푼 것 (틀림)
function solution(numbers) {
    var answer = [];
    var number = numbers.sort((a,b) => a-b)
    
    for(let i=0; i<number.length; i++) {
        for(let j=i+1; j<number.length; j++) {
            result = number[i] + number[j] 
                if(answer.indexOf(result) === -1) {
                     answer.push(result) 
            }
        }
    }
    return answer;
}

//reference1
function solution(numbers) {
    const answer = []
    
    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            const sum = numbers[i] + numbers[j]
            
            if(answer.includes(sum) === false) {
                answer.push(sum)   
            }
        }
    }
    return answer.sort((a,b)=> a-b)
}

// Set 메서드
// 1. 배열을 대체해서 사용할 수 있다
// 2. 타입은 객체 형태를 가진다
// 3. 고유한 데이터만 저장할 수 있다 (중복되는 데이터가 없다)

// 사용방법
// Set앞에 new 써주기
arr1 = new Set()
arr2 = []

typeof arr1
typeof arr2

Array.isArray(arr1) //false
Array.isArray(arr2) //true

//데이터 추가
arr1.add(1)
arr2.push(1)

//데이터 조회
arr2.includes(1) // true
arr2.has(1) // true

//길이(length)
arr1.size
arr2.length

// 데이터 삭제
arr1.delete(3)
arr2.pop()

//초기화
arr1.clear()

//반복문
arr1.forEach(el => {console.log(el)})

// *set => 배열로 변환하는 방법
// 1. Array.from
Array.from(arr1)
// 2.스프레드 연산자
// [...arr1].reduce((acc,cur) => {console.log(acc,cur)})

//reference2
function solution(numbers) {
    const answer = new Set()
    
    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            const sum = numbers[i] + numbers[j]
            
            answer.add(sum)
        }
    }
    return [...answer].sort((a,b)=> a-b)
}

//reference3 (set)
function solution(numbers) {
    const answer = new Set()
    
    numbers.forEach((num1,i) => {
        numbers.slice(i + 1).forEach(num2 => {
            const sum = num1 + num2

            answer.add(sum)
        })
    })
    
    return [...answer].sort((a,b)=> a-b)
}

//reference4 (set x)
function solution(numbers) {
    const answer = []
    
    numbers.forEach((num1,i) => {
        numbers.slice(i + 1).forEach(num2 => {
            const sum = num1 + num2

            if(answer.includes(sum) === false) {
                answer.push(sum)
            }
        })
    })
    
    return answer.sort((a,b)=> a-b)
}
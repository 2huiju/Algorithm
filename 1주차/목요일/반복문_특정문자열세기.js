// 문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.
// 반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.

// **`입력 인자`**
// - str은 문자열입니다.

// **`주의 사항`**
// - for을 이용해서 문제를 풀어야 합니다.
// - 문자열도 배열입니다.
// - 대문자 "A" 문자열도 "a" 에 포함입니다.

function countLetter(str) {
	let count = 0;

    for ( let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "A"){
            count++
        }
    } console.log(count)
}

countLetter("I am from Korea")                   
countLetter("A day without laughter is a day wasted.")

//문자열도 배열이기때문에 length, index값으로 가지고 올 수 있음
//arr.length 
//arr.index

// str.toLowerCase()
// str.toUpperCase()
// //문자열에서만 사용할 수 있는 메서드
// //문자열 전체를 소문자로 바꿔줌
// //이러면 대문자 소문자 둘다 체크 할 필요 없음
// //근데이거는 원본값을 변경해주지 않기 때문에 다시 한번 선언해줘야 함
// str = str.toUppercase()
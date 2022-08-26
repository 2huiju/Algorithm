// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 
//숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true

//내가푼것
function solution(s) {
    var answer = true;
                         //지수 표기법이 숫자e숫자 어쩌구여서 e가 들어가면 또 한번 걸러줌
    
    if (s.length !== 4 && s.length !== 6 || isNaN(s) || s.includes('e')) {
        return false
    } else return true

    return answer;
}


//reference
function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
        if ( isNaN(s[i]) === true) {
            //문자열중 하나라도 숫자가 아닌게 있다면
            //바로 false 를 리턴
            return false
        }
    }
    return true
}
//isNaN 자체를 테스트로 넘겨주면 테스트 통과 하기 힘드니까
//반복문을 통해 문자 하나하나 검증해주기

function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false
    }

    const answer = s.split("").filter(el => { return  isNaN(el) === true })
    //메서드 바로 뒤에 메서드 사용하기 : 메서드체이닝
    //문자열 전체에서 숫자가 아닌 데이터만 남긴다

    //빈 배열이 아니라면, 전체가 숫자로 구성되어 있지 않다. (false를 리턴)
    //빈 배열이 맞다면, 전체가 숫자로 구성되어 있다 (true를 리턴)
    return answer.length === 0
}






//메모

//Not a Number
isNaN("1234")
//return false : 숫자가 맞다, NaN 값이 아니다 
isNaN("123a")
//return true : 숫자가 아니다, NaN 값이 맞다
isNan(0/0)
//return true
Number.isNaN("1234")
//return true
Number.isNaN(Number("123a"))
//return false

// isNaN : 단순히 문자열인지 숫자열인지
// Number.isNaN : 엄격하게 판단하고 싶을 떄 사용

Number(undefined) // NaN
isNaN(undefined) // true
Number.isNaN(undefined) //false

str = "1 "
isNaN(str) //false

//문자열에서 숫자 하나를 검증하는게 아니라 문자열 자체를 가지고와서 검증하기


.split()
//문자열을 배열로 만들어주는 메서드
.split("")
//빈값을 보내면 문자열을 하나하나씩 쪼개서 배열에 넣어주겠따 라는 말
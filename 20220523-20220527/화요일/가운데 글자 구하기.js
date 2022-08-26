// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
    var answer = '';
    var length = s.length
    
    for (let i = 0; i < length; i++) {
        if (length % 2 !==0) {
            answer = s[parseInt(length/2)]
        } else answer = s.slice(length/2-1,length/2+1)
    }
    
    return answer;
}

//parseInt = 정수를 변환하는 함수


//인덱스값은 항상 정수로만 받아올 수 있기 때문에 소수점은 사용할 수가 없음
//그래서 정수로 변환해줘야 함 => math.floor (내림 처리 해주는것(소수점 제거))

function solution(s) {
    const center = Math.floor(s.length / 2)
    let answer = s[center]
    //홀수문자열은 이렇게 하면 통과
    
    if (length % 2 ===0) {
      //문자열의 길이가 짝수인지를 판단한다.
      //짝수가 맞다면, 가운데 글자의 앞에 있는 글자를 붙여준다
        answer = s[center - 1] +answer
      //가운데인덱스값-1 + 가운데인덱스값으로 가장 가운데 두 글자를 뽑아줌
    }
    return answer
}
solution("abcde")

function solution(s) {
    const center = Math.floor(s.length/2)
    return s.length % 2 === 1
    //홀수의 경우
    ? s[center]
    //짝수인 경우
    : s.substring(center-1,center+1)
    //center가 숫자 2라면 2번째 인덱스 제외하고 앞의 인덱스까지 잘라오니까 +1 해줘야함
    //전체문자열의 가운데의 바로 앞 글자부터 가운데 글자까지 가져옴
}
solution("abcd")


// 자릿수 더하기
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

// 입출력 예
// N	answer
// 123	6
// 987	24
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.


//reference
function solution(n)
{
    n = String(n)
    //숫자열은 인덱스를 가지고 오는 방법이 없으니까 문자열로 가져오기
    var answer = 0;
    //answer라는 값에 총 합을 더한 다음 리턴해주기
    //n의 값으로 자릿수를 받아온다음 하나하나마다의 합을 구하기
    for(let i =0; i < n.length; i++)
        answer += Number(n[i])
    //string으로 더하면 0123으로 니오니까
    //다시 number로 변경해서 숫자계산하게 하기
    return answer;
}

//reference
function solution(n)
{
    const answer = String(n).split('').reduce((acc,cur) => {
        return Number(acc)+Number(cur)
    })
return answer
}


//string type으로 변경시켜주는 메서드
let n = 123
String(n)
//123
n.toString(n)
//123
String(123)
//123
//123.toString
//에러
//tostring은 변수에 할당 후 가져와야함
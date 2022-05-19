// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

// 내가 푼 것
function solution(arr) {
    var answer = 0;
    var reduce = 0

	reduce = arr.reduce((i, arr) => { return i += arr })
    answer = reduce / arr.length

    return answer;
}


// reference

function solution(arr) {
    //평균 구하는 방법?
    //국어 50점, 수학 30점, 과학 20점 = 100점 / 3과목

    //arr 안쪽의 원소들을 다 더한 다음 arr의 length만큼 나눠주면 평균 구하기 가능

    //arr의 모든 데이터 다 더하기
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        //arr의 데이터를 다 더하기
    }
    return sum / arr.length
    //arr의 데이터를 다 합친 값에서 arr의 개수를 나누기 =
}

//배열메서드 (오늘 외울 필요는 업슴)
arr = [1,2,3,4,5]

arr.reduce( (acc, cur) =>  {
     //arr의 첫번쨰, 두번째 데이터를 가져옴 : 1,2
})

arr.reduce( (acc, cur) => {
    console.log(acc,cur)
},0) // 0 자리에는 내가 넣은 숫자가 옴 0을 넣으면 : 0, 1 이렇게


function solution(arr) {
    const answer = arr.reduce( (acc, cur) => {
        return acc + cur
        //acc의 초기값에 그 다음값 cur을 더하기 (1 + 2)
        //그다음 (1+2)가 acc가 되어서 그 다음값 3을 더하기 (3+3)
        //그다음 (3+3)가 acc가 되어서 그 다음값 4를 더하기 (6+4)
        //마지막으로 (6+4)가 acc가 되어서 그 다음값 5를 더하기 (10+5)
    }) 
    return answer / arr.length
    //answer 나누기 arr.length 
}

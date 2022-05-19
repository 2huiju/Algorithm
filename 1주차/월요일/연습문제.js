//한번에 2층씩 올라갈 수 있는 로봇이 1층에서 100층까지 올라가려면?
let answer = 0;
const limit = 100;

for(let i =1; i<limit; i=i+2) {
    answer = answer+1;
}


//Reference Code
// const limit2 = 100;
// const answer2 = Math.floor(limit2/2)
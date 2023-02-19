// 함수 선언식
// function pow(num){
//     return num * num;
// }
// console.log(pow(5));
// console.log(pow(10));

// 함수 표현식
// let printpow = function(num) {
//     return num * num;
// }
// console.log(printpow(5));
// console.log(printpow(10));

// 화살표 함수
// 인자값이 하나일 경우 ()생략
// 실행하는 명령이 하나일 경우 {return} 생략
// let printpow = num => num * num;
// console.log(printpow(5));
// console.log(printpow(10));

// function sum(...args) {
//     let result = 0;
//     for(let num of args) {
//         result = result + num;
//     }
//     console.log(`합계 : ${result}`);
// }
// sum(10, 20, 30);

function gugudan() {
    for(var i = 0; i < 9; i++) {
        console.log( + 3 * i);
    }
}
gugudan()
// 함수 호이스팅

// 함수 참조
console.log(hello);
console.log(hi);

// 함수 호출
console.log(hello("홍길동"))
// console.log(hi("홍길동")) // hi is not a function

// 함수 선언문
// 런타임 이전에 자바스크립트 엔진에 의해서 먼저 실행된다.
// 함수 선언문 코드 이전에 함수를 참조할 수 있으며 호출도 할 수 있다.
function hello(name) {
    return `${name}님 안녕하세요!`;
}

// 함수 표현식
var hi = function hello(name) {
    return `${name} hi~`;
}

console.log(hi("홍길동"))
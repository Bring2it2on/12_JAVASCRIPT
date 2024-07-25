// 재귀 함수
// 함수가 자기 자신을 호출하는 것을 재귀 호출이라고 한다.
// 재귀 호출을 수행하는 함수는 반복되는 처리를 위해 사용한다.

// n! = 1 * 2 * ... * (n-1) * n;
function factorial(n) {
    if(n <= 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));

/* 
재귀 함수는 반복되는 처리를 반복문 없이 구현할 수 있는 장점
무한 반복에 빠져서 스택 오버 플로우 에러를 발생시킬 수 있으므로 주의한다.
반복문보다 재귀 함수 사용이 더 직관적일 때만 사용하는 것이 바람직하다.
*/

// let 반복문 사용하여 factorial 만들기
function factorial2(n) {
    var result = 1
    for (let i = 1; i <= n; i++) {
        result = result*i;
    }
    return result
}

console.log(factorial2(1));
console.log(factorial2(2));
console.log(factorial2(3));
console.log(factorial2(4));
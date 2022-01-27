function randomNumber(min = 1000, max = 3000) {
    const randomNum = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1() {
    setTimeout(() => {
        console.log('F1');
    }, 500)
}
function f2() {
    setTimeout(() => {
        console.log('F2');
    }, 1000)
}

function f3() {
    setTimeout(() => {
        console.log('F3');
    }, 800)
}

randomNumber();
f1();
f2();
f3();
console.log('Olá, JS');
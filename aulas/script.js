//  const sayHi = () => {
//      alert('Hi');
//  }
//Argumento que sustenta todos os argumentos en
// function random() {
//     let total = 0;

//     for(let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total);
// }

// random(5,5,2,)

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }

// let objectArray = [1,2,3];

// funcao(objectArray);

const conta = function(operador, acumulador, ...numeros) {
    console.log(arguments);
};

conta('+', 0, 30,50,70);
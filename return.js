// function criaPessoa(nome, sobrenome) {
//     return { nome: nome, sobrenome: sobrenome };
// }

// const primeiraPessoa = criaPessoa('Matheus', 'Fernando');
// const segundaPessoa = {
//     nome: 'Fernando',
//     sobrenome: 'Souza'
// }

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const olaMundo = falaFrase('olá');
// const resto = fala('mundo');
// console.log(resto);

function criaMultiplicador(multiplicador) {
   return function(n) {
       return n * multiplicador;
   };
}

const duplica = criaMultiplicador(2);
console.log(duplica(2));

let num = [5, 8, 9, 3];
// console.log(`Nosso vetor é: ${num}`);
num.push(12);
num.push(7);
// console.log(`Agora nosso vetor é: ${num}`);
// console.log(`O tamanho de nosso vetor é: ${num.length}`);
// console.log(`Nosso vetor, ordenado, é: ${num.sort()}`);
// for(let c = 0; c < num.length; c++){
//     console.log(`A posição ${c} temo o valor ${num[c]}`);
// }

for (let c in num){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
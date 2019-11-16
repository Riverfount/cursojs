let num = document.querySelector('input#txtnum');
let myNumbers = document.querySelector('select#myNumbers');
let resp = document.querySelector('div#resp');
let listagem = [];

let isInInterval = n => Number(n) >= 1 && Number(n) <= 100;

let isInArray = (num, list)=> list.indexOf(Number(num)) !== -1;

let adicionar = ()=> {
    if (isInInterval(num.value) && !isInArray(num.value, listagem)){
        listagem.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${Number(num.value)} adicionado`;
        myNumbers.appendChild(item);
        resp.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista!');
    }
    num.value = '';
    num.focus();
};

let finalizar = ()=> {
    if (listagem.length != 0) {
        listagem.sort((a, b)=>a-b);
        console.log(listagem);
        let qde_lista = listagem.length;
        let max = listagem[qde_lista - 1];
        let min = listagem[0];
        let soma = listagem.reduce((a, b)=>a+b);
        let media = soma / qde_lista;
        resp.innerHTML =  `<p>Ao todo, temos ${qde_lista} números cadastrados</p>`;
        resp.innerHTML += `<p>O maior valor informado foi ${max}</p>`;
        resp.innerHTML += `<p>O menor valor informado foi ${min}</p>`;
        resp.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`;
        resp.innerHTML += `<p>A média dos valores digitados é: ${media.toFixed(2).replace('.', ',')}</p>`
    } else {
        alert('Adicione valores antes de finalizar!')
    }
};
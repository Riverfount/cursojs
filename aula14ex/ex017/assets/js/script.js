function tabuada() {
    let num = document.getElementById('txtnum');
    let tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value);
        tab.innerHTML = '';
        for (let counter = 1; counter <= 10; counter++) {
            let item = document.createElement('option');
            item.text = `${n} x ${counter} = ${n * counter}`;
            item.value = `tab${counter}`
            tab.appendChild(item)
        }
    }
}
function contar() {
    let start = document.querySelector('input#txtstart');
    let end = document.querySelector('input#txtend');
    let step = document.querySelector('input#txtstep');
    let msg = document.querySelector('div#msg');
    let msg_txt = '<p>Contando: <br/>';

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        msg.innerHTML = '<p>Faltam dados..</p>'
    } else {
        if (Number(step.value) == 0) {
            alert('Passo inválido! considerando passo igual a 1!');
            step.value = 1;
        }
        if (Number(start.value) < Number(end.value)) {
            // Contagem crescente
            for (let counter = Number(start.value); counter <= Number(end.value); counter += Number(step.value)) {
                msg_txt += `${counter} \u{1F449}`
            }
        } else {
            // Contagem decrescente
            for (let counter = Number(start.value); counter >= Number(end.value); counter -= Number(step.value)) {
                msg_txt += `${counter} \u{1F449}`
            }

        }
        msg.innerHTML = `${msg_txt} \u{1F3C1}</p>`
    }
}

function carregar() {
    let now = new Date();
    let hour = now.getHours();
    let dialog = window.document.querySelector('div#title');
    let img = window.document.querySelector('div#img');
    let body = window.document.body;

    dialog.innerHTML = `<h1>Agora são ${hour}h.</h1>`;

    if (hour >= 0 && hour <= 12) {
        body.style.background = '#f8b773';
        img.innerHTML = `<img src='assets/img/manha.jpg' alt="Imagem de um amanhecer" />`;
    } else if (hour >= 12 && hour <= 18) {
        body.style.background = '#32617b';
        img.innerHTML = `<img src='assets/img/tarde.jpg' alt="Imagem de um entardecer" />`;
    } else {
        body.style.background = '#2c3642';
        img.innerHTML = `<img src='assets/img/noite.jpg' alt="Imagem de um anoitecer" />`;
    }
}
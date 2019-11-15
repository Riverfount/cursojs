function verificar() {
    let now = new Date();
    let year = now.getFullYear();
    let fYear = Number(document.getElementById('txtano').value);
    let res = document.querySelector('div#res');
    if (fYear.length === 0 || fYear > year) {
        alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = year - fYear;
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked){
            genre = 'Homem';
            if (idade >= 0 && idade < 15){
                // criança
                img.setAttribute('src', 'assets/img/young_boy.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'assets/img/young_man.jpg')
            } else if (idade < 65) {
                // adulto
                img.setAttribute('src', 'assets/img/adult_man.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'assets/img/old_man.jpg')
            }
        } else {
            genre = 'Mulher';
            if (idade >= 0 && idade < 15){
                // criança
                img.setAttribute('src', 'assets/img/young_girl.jpg')
            } else if (idade < 21) {
                // joven
                img.setAttribute('src', 'assets/img/young_woman.jpg')
            } else if (idade < 65) {
                // adulto
                img.setAttribute('src', 'assets/img/adult_woman.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'assets/img/old_woman.jpg')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `<p>Detectamos ${genre} com ${idade} anos</p>`;
        res.appendChild(img);
    }
}
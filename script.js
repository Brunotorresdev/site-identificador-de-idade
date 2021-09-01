function verificar()  {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('ERRO Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var gênero = '' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'bebemasc.jpg' )
            } else if ( idade < 21) {
                //adolecente
                img.setAttribute('src', 'jovemmasc.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultomasc.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosomasc.jpg')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'bebefem.jpg')
            } else if ( idade < 21) {
                //adolecente
                img.setAttribute('src', 'jovemfem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultofem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosofem.jpg')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} Anos!`
        res.appendChild(img) 
    }
}  
    

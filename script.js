function gerar() {
    var numero = document.getElementById('numero')
    var res = document.getElementById('res')

    res.innerHTML = ''
    if (numero.value == '') {
        window.alert('Campo vazio, preencha com um número')
    } else {
        for (var c = 1; c <= 10; c++) {
            res.innerHTML += `<option>${numero.value} x ${c} = ${numero.value * c}<br></option>`
        }
    }
}
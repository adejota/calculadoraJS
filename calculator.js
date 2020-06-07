viewfinder = document.calcform.viewfinder // form input tela

function onOff() {
    document.getElementById("viewfinder").classList.toggle("hide")
}

function clearEverything() {
    viewfinder.value = "";
}

function insertNum(num) {
    viewfinder.value = viewfinder.value + num
}

function soma() {
    gOper = 1
    valor1 = viewfinder.value
    viewfinder.value = ""
}

function menos() {
    gOper = 2
    valor1 = viewfinder.value
    viewfinder.value = ""
}

function vezes() {
    gOper = 3
    valor1 = viewfinder.value
    viewfinder.value = ""
}

function divisao() {
    gOper = 4
    valor1 = viewfinder.value
    viewfinder.value = ""
}

function rQuadrada() {
    valor1 = viewfinder.value
    viewfinder.value = parseFloat((Math.sqrt(valor1)).toFixed(2))
}

function porcento() {
    valor1 = viewfinder.value
    viewfinder.value = parseFloat((valor1 / 100).toFixed(2))
}

function igual() {
    valor2 = viewfinder.value
    if (gOper == 1) {
        viewfinder.value = parseFloat(valor1) + parseFloat(valor2)
    }
    if (gOper == 2) {
        viewfinder.value = parseFloat(valor1) - parseFloat(valor2)
    }
    if (gOper == 3) {
        viewfinder.value = parseFloat(valor1) * parseFloat(valor2)
    }
    if (gOper == 4) {
        resultado = parseFloat(valor1) / parseFloat(valor2)
        viewfinder.value = parseFloat(resultado.toFixed(2))
    }
}











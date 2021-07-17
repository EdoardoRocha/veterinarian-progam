function VacinaVeterinaria() {
var inValor = document.getElementById('inValOr') 
var outDesconto = document.getElementById('outDesconto') 
var outValor = document.getElementById('outValor')
var inSelect = document.getElementById('inSelect')


var valor = Number(inValor.value)

if(valor == "" || (!rbConvenioS.checked && !rbConvenioN.checked)) {
    alert('Porfavor insira corretamente os valores')
    inValOr.focus()
    return
}

var desconto = ""

if(rbConvenioS.checked) {
    if(inSelect.value == "Amigo"){
        desconto = calcularDesconto(valor, 20)
    } else  {
        desconto = calcularDesconto(valor,50)
    }

 
} else {
    desconto = calcularDesconto(valor,10)
}

outDesconto.textContent = "Desconto R$: " + desconto.toFixed(2)
outValor.textContent = "A pagar R$: " + (valor-desconto).toFixed(2)


}
var btvet = document.getElementById('btadd')
btvet.addEventListener('click', VacinaVeterinaria)

var inValor = document.getElementById('body-enter')
inValor.addEventListener('keypress', function (tecla) {
 if(tecla.key === "Enter") {
     VacinaVeterinaria()
 }
})

function calcularDesconto(valor, taxa) {
    return valor * (taxa/100)
}

var rbsim = document.getElementById('rbConvenioS')
rbsim.addEventListener('change', function () {
    var pconvenio = document.getElementById('pConvenio')
    pconvenio.className = "exibe"
})


var rbNao = document.getElementById('rbConvenioN')
rbNao.addEventListener('change', function () {
    var pconv = document.getElementById('pConvenio')
    pconv.className = "oculta"
})


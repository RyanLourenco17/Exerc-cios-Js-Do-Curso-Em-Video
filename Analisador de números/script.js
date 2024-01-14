const number = document.getElementById("inputSelectNumber")
const btnAdd = document.querySelector(".add")
const valueField = document.getElementById("chosenValues")
const btnFinish = document.querySelector(".finish")
const output = document.querySelector(".output")
const values = []
function addNumber(){
    let numberValue = Number(number.value)
    let opt = document.createElement('option')
    if(numberValue == 0){
        alert('Adicione um número!')
    }
    else if(numberValue > 100){
        alert('O Valor digitado é inválido pois é maior que 100')
    }
    else if(values.includes(numberValue)){
        alert("O número ja foi usado")
    }
    else{
        values.push(numberValue)
        console.log(values)
        opt.text = `Valor: ${numberValue} adicionado`
        valueField.appendChild(opt)
        number.value = ''
        number.focus()
        output.innerHTML = ''
    }
}

function finishValues(){
    let addition = 0
    let division = 0
    if(valueField.length == 0){
        alert("Não tem nenhum valor.")
    }else{
        let higherNumber = Math.max(...values)
        let minNumber = Math.min(...values)
        for(let i = 0; i < values.length; i++){
            addition  += values[i]
            division = addition / values.length
        }
        output.innerHTML += `<p>Ao todo, temos ${values.length} números cadastrados</p>`
        output.innerHTML += `<p>O maior valor informado foi ${higherNumber}</p>`
        output.innerHTML += `<p>O menor valor informado foi ${minNumber}</p>`
        output.innerHTML += `<p>A soma de todos os valores foi de ${addition}</p>`
        output.innerHTML += `<p>A média dos valores digitados é ${division}</p>`
    }
}

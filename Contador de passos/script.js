const inputStart = document.getElementById("start")
const inputEnd = document.getElementById("end")
const inputStep = document.getElementById("step")
const output = document.querySelector(".output")
const btn = document.querySelector(".btn")



function count(){
    if(inputStart.value.length === 0 || inputEnd.value.length === 0 || inputStep.value.length === 0){
        output.innerHTML = "Por favor preencha todos os campos"
    } else{
        output.innerHTML = 'Contando: '
        let start = Number(inputStart.value)
        let end = Number(inputEnd.value)
        let step = Number(inputStep.value)
        if(step <= 0){
            alert('Passo inválido! Tente colocar um valor de 1 pra cima ')
        }
        if(start < end){
            // Contagem Crescente
            for(i = start; i <= end; i += step){
                output.innerHTML += ` ${i} \u{1F449}`
            }
        } else{
            // Contagem Decrescente
            for(i = start; i >= end; i -= step){
                output.innerHTML += `${i} \u{1F449}`
            }
        }
        output.innerHTML += `\u{1F3C1}`
    }
} 
const inputNumber = document.getElementById("number");
const tab = document.getElementById("selTab")
const btnGenerate = document.querySelector(".btn")

const toGenerate = () => {
    let number = inputNumber.value
    if(number.length === 0){
        alert("Digite um valor")
    }else{
        tab.innerHTML = ""
        for(i = 0; i <= 10; i++){
            let item = document.createElement("option")
            item.text = `${number} X ${i} = ${number*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
    
}
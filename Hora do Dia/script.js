const msg = document.getElementById("msg");
const img = document.getElementById("imagem")
const greeting = document.getElementById("greeting")



function carregar(){
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if(hora >= 0 && hora < 12){
        img.src = './imgs/manhã.jpg'
        greeting.innerHTML ="Bom dia!"
        document.body.style.background = "#3BA5ED"
    }
    else if(hora >= 12 && hora <= 18){
        img.src = './imgs/tarde.jpg'
        greeting.innerHTML ="Bom tarde!"
        document.body.style.background = "#FDD573"
    }
    else{
        img.src = './imgs/noite.jpg'
        greeting.innerHTML ="Bom noite!"
        document.body.style.background = "#52487C"
    }
}
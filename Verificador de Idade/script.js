const formAge = document.getElementById("dateAge")
const radioMale = document.getElementById("masc");
const radioFemale = document.getElementById("fem");
const btnSubmit = document.querySelector(".btn")
const output = document.querySelector(".output")

const verificar = () => {
    let date = new Date()
    let year = date.getFullYear()
    if(formAge.value.length == 0 || Number(formAge.valueOf) > year){
        output.innerHTML = "Verifique os dados e tente novamente"
    }else{
        let age = year - formAge.value;
        let img = document.createElement("img")
        img.setAttribute("id", "foto")
        let gender = "";
        if (radioMale.checked) {
            gender = "Homem";
            if(age >= 0 && age < 12){
                img.setAttribute("src", "./imgs/menino.png")
            }
            else if(age > 12 && age <= 21){
                img.setAttribute("src", "./imgs/jovem menino.png")
            }
            else if(age > 21 && age < 50){
                img.setAttribute("src", "./imgs/homem.png")
            }
            else{
                img.setAttribute("src", "./imgs/homem idoso.png")
            }
        } else if (radioFemale.checked) {
            gender = "Mulher";
            if(age >= 0 && age < 12){
                img.setAttribute("src", "./imgs/menina.png")
            }
            else if(age > 12 && age <= 21){
                img.setAttribute("src", "./imgs/jovem menina.png")
            }
            else if(age > 21 && age < 50){
                img.setAttribute("src", "./imgs/mulher.png")
            }
            else{
                img.setAttribute("src", "./imgs/mulher idosa.png")
            }
        }
        output.style.textAlign = "center"
        output.innerHTML = `Dectamos ${gender} com ${age} anos de idade`
        output.appendChild(img)
    }
}
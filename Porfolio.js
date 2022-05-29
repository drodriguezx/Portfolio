const nome = document.getElementById("nome")
const email = document.getElementById("email")
const assunto = document.getElementById("assunto")
const mensagem = document.getElementById("mensagem")
const form = document.getElementById ("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit",e=>{
 e.preventDefault()
 let warnings =""
 let enviar= false
 let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
 parrafo.innerHTML= ""
    if (nome.value.length < 6) {
 warnings += "o nome não e valido <br>"
 enviar= true
 }
 if(!regexEmail.test(email.value)){
     warnings += "el email não e valido <br>"
     enviar = true
   }
if (assunto.value.length < 10){
    warnings += "o assunto não e valido <br>"
    enviar = true 
}
if (mensagem.value.length < 10){
    warnings += "o mensagem não e valido <br>"
    enviar = true 
}
if (enviar){
    parrafo.innerHTML="warnings"
}
})
var tabela = document.querySelector("table");

 tabela.addEventListener("dblclick",function(event){
     var alvoEvento = event.target;
     var paiDoAlvo = alvoEvento.parentNode; // TR = paciente= remover 

     event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        paiDoAlvo.remove();
    } ,500) //milisecundos

     //event.target.parentNode.remove(); = paiDoAlvo.remove();
 })

// var pacientes = document.querySelectorAll(".paciente");
// pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//       this.remove();
//    });
// });
var titulo = document.querySelector(".title"); //representa um objeto
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc")

var pesoValido = ValidaPeso(peso); //true ou false
var alturaValida = validaAltura(altura);

if(!pesoValido){
    console.log("Peso inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
}

if(!alturaValida){
    alert("Altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido");
}

if (alturaValida && pesoValido){
    var imc = calculaIMC(peso,altura);
    tdImc.textContent = imc;
}
}

function ValidaPeso(peso){
    if(peso >= 0 && peso <1000){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <=3.0){
        return true;
    }
    else{
        return false;
    }
}

function calculaIMC(peso,altura){
    var imc = 0;

    var imc = peso / (altura * altura); 

    return imc.toFixed(2);
}


var titulo = document.querySelector(".title");
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

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
}

if(altura <= 0 || altura >= 2.10){
    alert("Altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido");
}

if (alturaValida && pesoValido){
    var imc = peso / (altura * altura); // 100 /  2.0 * 2.0 = 100 / 4 ===== 25
    tdImc.textContent = imc;
    tdImc.textContent = imc.toFixed(2);
}
}

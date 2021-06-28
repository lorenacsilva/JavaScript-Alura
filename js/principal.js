var titulo = document.querySelector(".title");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc")


var imc = peso / (altura * altura); // 100 /  2.0 * 2.0 = 100 / 4 ===== 25

console.log(paciente); //tr
console.log(tdPeso); //td que tem o peso
console.log(peso); //Obter 100
console.log(altura); //Obter 2.00
console.log(imc);

tdImc.textContent = imc;

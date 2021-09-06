var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //previne os comportamentos padrões dos usuários do browser
    var form = document.querySelector("#form-adiciona");

    var paciente = ObtemPacienteoForm(form);
    
    var pacienteTr = MontaTr(paciente);

    var erros = validaPaciente(paciente);

    console.log(erros);

    if(erros.length > 0){

        exibeMensagensErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);

    form.reset(); //limpa os campos do forms
    var mensagensErro =  document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function ObtemPacienteoForm(form){

    var paciente = {     // Objeto é um conjunto de variáveis 
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function MontaTr(paciente){
    var pacienteTr = document.createElement("tr"); 
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); 
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura")); 
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if( paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(!ValidaPeso(paciente.peso)){
        erros.push("Peso Invalido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    if( paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if( paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco")
    }

    if( paciente.altura.length == 0){
        erros.push("A Altura não pode ser em branco")
    }

    return erros;
}


var titulo = document.querySelector("h1");

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura;

		if (!pesoValido) {
			alert("O peso está muito abaixo ou muito acima do normal, por favor, insira o peso novamente");
			pesoValido = false;
			tdImc.textContent = "Peso inválido";
			paciente.classList.add("paciente-invalido");
		}

		if (!alturaValida) {
			alert("Altura inválida");
			alturaValida = false;
			tdImc.textContent = "Altura inválida";
			paciente.classList.add("paciente-invalido");
		}

	if (pesoValido && alturaValida) {
		var imc = peso / (altura * altura);
		tdImc.textContent = imc;	
	}
}

function validaPeso(peso){
	if(peso >= 0 && peso < 1000){
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura){
	if(altura >= 0 && altura <= 3.0){
		return true;
	} else {
		return false
	}
}

function calculaImc(peso, altura){
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}
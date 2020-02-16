var tabela = document.querySelector("table")

tabela.addEventListener("dblclick",function (event){
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){
		event.target.parentNode.remove();
	},500)
});

//event.target = foca no clique | parentNode = faz a remoção do TR completp (paciente) | .remove = propriedade que remove


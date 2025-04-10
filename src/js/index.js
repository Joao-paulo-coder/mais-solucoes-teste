
const botoes = document.querySelectorAll(".botao");
const servicos = document.querySelectorAll(".servico");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		const botaoSelecionado = document.querySelector(".botao.selecionado");
		botaoSelecionado.classList.remove("selecionado");
		botao.classList.add("selecionado");

		const servicoSelecionado = document.querySelector(".servico.selecionado");
		servicoSelecionado.classList.remove("selecionado");
		servicos[indice].classList.add("selecionado");
	});
});

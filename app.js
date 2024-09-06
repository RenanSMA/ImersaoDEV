function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos pelo seu ID.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // Se nada for digitado no campo de pesquisa:
  if (!campoPesquisa) {
    section.innerHTML = "Nada foi encontrado. Tente digitar um jogo ou categoria."
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = "";

  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array).
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLocaleLowerCase()
    tags = dado.tags.toLocaleLowerCase()
    // Se título incluir o que foi digitado pelo usuário:
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento HTML para cada resultado da pesquisa, incluindo título, descrição e link.
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta"> ${dado.descricao} </p>
        <a href=${dado.link} target="_blank">Mais Detalhes</a>
      </div>
      `

    }
  };

  if (!resultados) {
    resultados = "Nada foi encontrado. Tente novamente."

  }


  // Atribui o HTML gerado para o conteúdo interno da seção.
  section.innerHTML = resultados;
}









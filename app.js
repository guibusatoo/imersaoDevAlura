function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo seu ID
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value ;

    if(campoPesquisa == ""){
      section.innerHTML = "<p>Nada foi encontrado. Busca vazia!</p>"
      return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
   
    // Itera sobre cada dado da pesquisa (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()

      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

        //Cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2> 
          <p class="descricao-meta">${dado.descricao}</p> 
          <a href=${dado.link} target="_blank">Mais informações</a> </div>
      `;

      }

      if(!resultados) {

        resultados="<p>Nada foi encontrado</p>"

      }
    
    }
  
    // Atribui o HTML construído à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }
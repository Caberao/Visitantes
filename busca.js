$("#formBuscaAvancada").on("submit", function(event) {
    event.preventDefault();
  
    // Obter os dados do formulário
    var formData = $(this).serialize();
  
    // Realizar requisição AJAX para o servidor
    $.ajax({
      url: "buscar.php", // Arquivo PHP que irá processar a busca no servidor
      type: "POST",
      data: formData,
      success: function(result) {
        // Tratar o resultado da busca e atualizar a interface com os dados encontrados
        // por exemplo, exibir os resultados em uma tabela ou lista na página
        // ...
      },
      error: function(error) {
        console.error("Erro na busca:", error);
      }
    });
  });
  
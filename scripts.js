// Script em arquivo scripts.js

// Obter referências aos elementos do formulário
var form = document.getElementById("cadastroForm");
var nomeInput = document.getElementById("nome");
var telefoneInput = document.getElementById("telefone");
var cidadeOrigemInput = document.getElementById("cidadeOrigem");
var bairroondemoraInput = document.getElementById("bairroondemora");
var statusSelect = document.getElementById("status");

// Adicionar um ouvinte de evento de entrada de dados nos campos
nomeInput.addEventListener("input", validarNome);
telefoneInput.addEventListener("input", validarTelefone);
cidadeOrigemInput.addEventListener("input", validarCidadeOrigem);
BairroondemoraInput.addEventListener("input", validarBairroondemora);

// Função de validação do campo Nome
function validarNome() {
  if (nomeInput.value === "") {
    nomeInput.setCustomValidity("Por favor, preencha o campo Nome.");
  } else {
    nomeInput.setCustomValidity("");
  }
}

// Função de validação do campo Telefone
function validarTelefone() {
  if (telefoneInput.value === "") {
    telefoneInput.setCustomValidity("Por favor, preencha o campo Telefone.");
  } else {
    telefoneInput.setCustomValidity("");
  }
}

// Função de validação do campo Cidade de Origem
function validarCidadeOrigem() {
  if (cidadeOrigemInput.value === "") {
    cidadeOrigemInput.setCustomValidity("Por favor, preencha o campo Cidade de Origem.");
  } else {
    cidadeOrigemInput.setCustomValidity("");
  }
}

// Função de validação do campo Bairro onde mora
function validarBairroondemora() {
  if (BairroondemoraInput.value === "") {
    BairroondemoraInput.setCustomValidity("Por favor, preencha o campo Bairro onde mora.");
  } else {
    BairroondemoraInput.setCustomValidity("");
  }
}

// Adicionar um ouvinte de evento de envio do formulário
form.addEventListener("submit", function(event) {
  // Validar campos novamente antes do envio do formulário
  validarNome();
  validarTelefone();
  validarCidadeOrigem();
  validarBairroondemora();
});

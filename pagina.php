<?php
// Configurações do banco de dados
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco_de_dados";

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Receber os dados do formulário
$nome = $_POST["nome"];
$telefone = $_POST["telefone"];
$cidadeOrigem = $_POST["cidadeOrigem"];
$cidadeMoradia = $_POST["cidadeMoradia"];
$status = $_POST["status"];

// Inserir os dados no banco de dados
$sql = "INSERT INTO visitantes (nome, telefone, cidade_origem, cidade_moradia, status) VALUES ('$nome', '$telefone', '$cidadeOrigem', '$cidadeMoradia', '$status')";
if ($conn->query($sql) === TRUE) {
   

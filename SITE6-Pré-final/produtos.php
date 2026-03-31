<?php
$host = 'localhost';
$user = 'root';
$senha = '';
$banco = 'nerdware';

$conn = new mysqli($host, $user, $senha, $banco);

if ($conn->connect_error) {
  die("Erro na conexão: " . $conn->connect_error);
}

$sql = "SELECT nome, imagem, categoria FROM produtos";
$result = $conn->query($sql);

$produtos = [];

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $produtos[] = $row;
  }
}

header('Content-Type: application/json');
echo json_encode($produtos);

$conn->close();
?>

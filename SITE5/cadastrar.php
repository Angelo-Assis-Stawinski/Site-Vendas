<?php include 'db.php'; ?>
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nome = $_POST['nome'];
  $preco = $_POST['preco'];
  $imagem = $_POST['imagem'];
  $descricao = $_POST['descricao'];

  $stmt = $pdo->prepare("INSERT INTO produtos (nome, preco, imagem, descricao) VALUES (?, ?, ?, ?)");
  $stmt->execute([$nome, $preco, $imagem, $descricao]);
  header("Location: index.php");
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Cadastrar Produto</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header><h1>Cadastrar Produto</h1></header>
  <main>
    <form method="POST">
      <input type="text" name="nome" placeholder="Nome do produto" required>
      <input type="number" step="0.01" name="preco" placeholder="Preço" required>
      <input type="text" name="imagem" placeholder="URL da imagem" required>
      <textarea name="descricao" placeholder="Descrição"></textarea>
      <button type="submit">Cadastrar</button>
    </form>
    <a href="index.php">Voltar</a>
  </main>
</body>
</html>

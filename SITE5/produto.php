<?php include 'db.php'; ?>
<?php
$id = $_GET['id'];
$stmt = $pdo->prepare("SELECT * FROM produtos WHERE id = ?");
$stmt->execute([$id]);
$produto = $stmt->fetch();
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title><?= $produto['nome'] ?></title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header><h1><?= $produto['nome'] ?></h1></header>
  <main>
    <img src="<?= $produto['imagem'] ?>" alt="<?= $produto['nome'] ?>">
    <p>Preço: R$ <?= $produto['preco'] ?></p>
    <p>Descrição: <?= $produto['descricao'] ?></p>
    <a href="index.php">Voltar</a>
  </main>
</body>
</html>

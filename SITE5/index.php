<?php include 'db.php'; ?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>TechStore</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>TechStore</h1>
    <a href="cadastrar.php">Cadastrar Produto</a>
  </header>
  <main>
    <?php
    $stmt = $pdo->query("SELECT * FROM produtos");
    while ($row = $stmt->fetch()) {
      echo "<div class='product'>
              <img src='{$row['imagem']}' alt='{$row['nome']}'>
              <h3>{$row['nome']}</h3>
              <p>R$ {$row['preco']}</p>
              <a href='produto.php?id={$row['id']}'>Ver detalhes</a>
            </div>";
    }
    ?>
  </main>
  <footer><p>&copy; 2025 TechStore</p></footer>
</body>
</html>

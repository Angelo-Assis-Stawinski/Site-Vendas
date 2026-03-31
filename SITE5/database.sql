CREATE DATABASE techstore;
USE techstore;

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  imagem VARCHAR(255),
  descricao TEXT
);

INSERT INTO produtos (nome, preco, imagem, descricao) VALUES
('Mouse Gamer RGB', 120.00, 'https://via.placeholder.com/250x150?text=Mouse', 'Mouse com iluminação RGB e alta precisão.'),
('Teclado Mecânico Azul', 250.00, 'https://via.placeholder.com/250x150?text=Teclado', 'Teclado com switches azuis e estrutura metálica.'),
('Monitor 24" Full HD', 899.00, 'https://via.placeholder.com/250x150?text=Monitor', 'Monitor com resolução Full HD e taxa de 75Hz.'),
('Headset Surround 7.1', 199.00, 'https://via.placeholder.com/250x150?text=Headset', 'Headset com som surround e microfone embutido.');

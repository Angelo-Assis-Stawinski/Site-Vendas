CREATE DATABASE nerdware;

USE nerdware;

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  imagem VARCHAR(255),
  categoria VARCHAR(50),
  preco DECIMAL(10,2)
);

INSERT INTO produtos (nome, imagem, categoria, preco) VALUES
('Monitor LG UltraGear 27\'\'', 'https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_SL1500_.jpg', 'Monitores', 1499.90),
('Teclado Mecânico Redragon Kumara', 'https://m.media-amazon.com/images/I/71c5YpTzYzL._AC_SL1500_.jpg', 'Teclados', 249.90),
('Mouse Gamer Logitech G502', 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg', 'Mouses', 299.00),
('Headset HyperX Cloud II', 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_SL1500_.jpg', 'Headsets', 499.90);

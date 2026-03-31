const produtos = [
  {
    nome: "Monitor Gamer",
    imagem: "https://pngimg.com/uploads/monitor/monitor_PNG101653.png",
    categoria: "Monitores",
    preco: "R$ 1.299,00"
  },
  {
    nome: "Teclado Mecânico RGB",
    imagem: "https://vivensis.vtexassets.com/arquivos/ids/155437-1000-1000/Teclado-Mamba-Product-Image02.png?v=638055295894930000",
    categoria: "Teclados",
    preco: "R$ 349,90"
  },
  {
    nome: "Mouse Gamer",
    imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/156589/xlarge/Mouse-Gamer-T-Dagger-Bettle-RGB-8000-DPI-10-Bot-es-Preto-T-TGM305_1752857683.png",
    categoria: "Mouses",
    preco: "R$ 189,90"
  },
  {
    nome: "Headset Gamer",
    imagem: "https://pngimg.com/uploads/headphones/headphones_PNG101975.png",
    categoria: "Headsets",
    preco: "R$ 499,00"
  }
];

const container = document.getElementById("produtos-container");

produtos.forEach(produto => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" />
    <h4>${produto.nome}</h4>
    <p>${produto.categoria}</p>
    <p class="preco">${produto.preco}</p>
    <div class="botoes">
      <button class="ver-mais">Ver mais</button>
      <button class="carrinho">Adicionar ao carrinho</button>
    </div>
  `;
  container.appendChild(card);
});

// Alternância de tema
const toggleBtn = document.getElementById("toggle-theme");
const themeLabel = document.getElementById("theme-label");

function updateThemeLabel() {
  const isDark = document.body.classList.contains("dark");
  themeLabel.textContent = isDark ? "Tema claro" : "Tema escuro";
  toggleBtn.textContent = isDark ? "🌙" : "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  updateThemeLabel();
});

updateThemeLabel();

// Função do botão "Adicionar ao carrinho"
const carrinho = [];

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("carrinho")) {
    const card = e.target.closest(".card");
    const nome = card.querySelector("h4").textContent;
    const preco = card.querySelector(".preco").textContent;

    carrinho.push({ nome, preco });

    alert(`✅ "${nome}" foi adicionado ao carrinho!`);
    console.log("Carrinho atual:", carrinho);
  }
});

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
  },
  {
    nome: "Cadeira Gamer",
    imagem: "https://png.pngtree.com/png-vector/20240822/ourmid/pngtree-premium-black-gaming-chair-png-image_13462002.png",
    categoria: "Cadeiras Gamer",
    preco: "R$ 1.099,00"
  },
  {
    nome: "Microfone USB",
    imagem: "https://static.vecteezy.com/system/resources/thumbnails/039/228/523/small/ai-generated-studio-microphone-on-transparent-background-ai-generated-png.png",
    categoria: "Microfones",
    preco: "R$ 279,90"
  },
  {
    nome: "Placa de Vídeo RTX 3060",
    imagem: "https://img.terabyteshop.com.br/produto/g/placa-de-video-gigabyte-nvidia-geforce-rtx-3060-windforce-oc-12gb-gddr6-dlss-ray-tracing-gv-n3060wf2oc-12gd_172983.png",
    categoria: "Placas de Vídeo",
    preco: "R$ 2.499,00"
  },
  {
    nome: "Cooler RGB",
    imagem: "https://static.doocacommerce.com.br/chipbyte/product/cooler-fan-gamemax-rainbowforce-led-rgb-120mm-fn12rainbow-c2-1672069346522_1000x1000+fill_ffffff.png",
    categoria: "Coolers e Refrigeração",
    preco: "R$ 149,90"
  },
  {
    nome: "Fonte 650W",
    imagem: "https://img.terabyteshop.com.br/produto/g/fonte-gamemax-gp650-650w-80-plus-bronze-pfc-ativo-black_107499.png",
    categoria: "Fontes e Cabos",
    preco: "R$ 399,00"
  },
  {
    nome: "SSD 1TB NVMe",
    imagem: "https://scarcom.vtexassets.com/arquivos/ids/159862/image_2024_02_23T20_09_40_838Z.png?v=638443159278700000",
    categoria: "Armazenamento",
    preco: "R$ 599,00"
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
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  updateThemeLabel();
});

updateThemeLabel();

// Carrinho funcional
const carrinho = [];

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("carrinho")) {
    const card = e.target.closest(".card");
    const nome = card.querySelector("h4").textContent;
    const preco = card.querySelector(".preco").textContent;

    carrinho.push({ nome, preco });
    atualizarCarrinho();
  }
});

function atualizarCarrinho() {
  const contador = document.getElementById("contador-carrinho");
  const painel = document.getElementById("painel-carrinho");
  const lista = document.getElementById("lista-carrinho");

  contador.textContent = carrinho.length;
  painel.style.display = "block";
  lista.innerHTML = "";

  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nome} - ${item.preco}
      <button onclick="removerItem(${index})">❌</button>
    `;
    lista.appendChild(li);
  });
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function salvarCarrinho() {
  fetch('http://localhost:3000/salvar-carrinho', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(carrinho)
  })
  .then(res => res.text())
  .then(msg => alert(msg))
  .catch(err => console.error(err));
}

const imgVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const trocarNomeDaCor = document.querySelector("#nome-cor-selecionada");
const imgMiniatura0 = document.getElementById("0-imagem-miniatura");
const imgMiniatura1 = document.getElementById("1-imagem-miniatura");
const imgMiniatura2 = document.getElementById("2-imagem-miniatura");
const btn = document.querySelector("#hamburger");
const nav = document.querySelector("nav");


const verdeCipreste = {
  nome: "Verde-cipreste",
  pasta: "imagens-verde-cipreste",
};

const azulInverno = {
  nome: "Azul-inverno",
  pasta: "imagens-azul-inverno",
};

const meiaNoite = {
  nome: "Meia-noite",
  pasta: "imagens-meia-noite",
};

const estelar = {
  nome: "Estelar",
  pasta: "imagens-estelar",
};
const rosaClaro = {
  nome: "Rosa-claro",
  pasta: "imagens-rosa-claro",
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["41 mm", "45 mm"];

let imgSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImg() {
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-imagem"]:checked'
  ).id;
  imgSelecionada = idOpcaoSelecionada.charAt(0);
  imgVisualizacao.src = `./Src/imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imgSelecionada}.jpeg`;
}
function trocarTamanho() {
  // atualizar var de controle do tamanho
  const idOpcaoSelecionada = document.querySelector(
    '[name ="opcao-tamanho" ]:checked'
  ).id;
  tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
  // mudar o titulo do produto
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]} `;
  // mudar o tamanho da img quando selecionar uma opção
  // imgVisualizacao.classList.toggle('caixa-pequena')

  if (opcoesTamanho[tamanhoSelecionado] == "41 mm") {
    imgVisualizacao.classList.add("caixa-pequena");
  } else {
    imgVisualizacao.classList.remove("caixa-pequena");
  }
}
function trocarCor() {
  // trocar titulo da pagina
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-cor"]:checked'
  ).id;
  corSelecionada = idOpcaoSelecionada.charAt(0);
  // trocar nome da cor
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
  // troca o nome da cor
  trocarNomeDaCor.innerHTML = `Cor - ${opcoesCores[corSelecionada].nome}`;
  // trocar as miniaturas
  imgMiniatura0.src = `./Src/imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`;
  imgMiniatura1.src = `./Src/imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`;
  imgMiniatura2.src = `./Src/imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`;
  //   TROCAR IMG VISUALIZAÇÕA
  imgVisualizacao.src = `./Src/imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imgSelecionada}.jpeg`;
}
function mostrar() {
  nav.classList.toggle("active");

}

btn.addEventListener("click", mostrar);

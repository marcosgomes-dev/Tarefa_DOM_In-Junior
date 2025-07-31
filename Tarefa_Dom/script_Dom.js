function adicionarNota() {
  let valorNota = document.querySelector("#inputNota").value.trim();

  // Substitui vírgula por ponto para aceitar decimal com vírgula
  valorNota = valorNota.replace(",", ".");

  document.querySelector("#inputNota").value = "";

  if (valorNota === "") {
    alert("Por favor, insira uma nota");
    return;
  }

  if (isNaN(valorNota)) {
    alert("A nota digitada é inválida, por favor, insira uma nota válida");
    return;
  }

  let numeroNota = Number(valorNota);

  if (numeroNota < 0 || numeroNota > 10) {
    alert("A nota digitada é inválida, por favor, insira uma nota válida");
    return;
  }

  totalNotas++;
  let textoNota = document.createElement("p");
  textoNota.innerHTML = "Nota " + totalNotas + " é: " + valorNota;
  let areaNotas = document.querySelector("#areaNotas");
  areaNotas.append(textoNota);
  salvarNota(numeroNota);
}

function calcularMedia() {
  if (listaNotas.length === 0) {
    alert("Nenhuma nota adicionada.");
    return;
  }

  let somaNotas = 0;
  for (let i = 0; i < listaNotas.length; i++) {
    somaNotas += listaNotas[i];
  }
  let mediaFinal = somaNotas / listaNotas.length;

  document.querySelector("#resultado").innerHTML =
    "A sua média é: " + mediaFinal.toFixed(2);
}

function salvarNota(num) {
  listaNotas.push(num);
}

let totalNotas = 0;
let listaNotas = [];

let botaoAdicionar = document.querySelector("#botaoAdicionar");
let botaoCalcular = document.querySelector("#botaoCalcular");

botaoAdicionar.addEventListener("click", () => {
  adicionarNota();
});
botaoCalcular.addEventListener("click", () => {
  calcularMedia();
});

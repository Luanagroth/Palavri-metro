function obterTextoVisivel() {
  return document.body.innerText || "";
}

function contarPalavras(texto) {
  const contagem = {};
  const stopwords = new Set([
    "a", "o", "e", "de", "do", "da", "em", "um", "uma", "para", "com",
    "é", "que", "na", "no", "se", "os", "as", "por", "como", "mas", "ou"
  ]);

  texto
    .toLowerCase()
    .replace(/[.,!?;:"()\-_\[\]{}<>\/\\|@#$%^&*=+~`0-9]/g, "")
    .split(/\s+/)
    .forEach(palavra => {
      if (palavra && !stopwords.has(palavra)) {
        contagem[palavra] = (contagem[palavra] || 0) + 1;
      }
    });

  return Object.entries(contagem).sort((a, b) => b[1] - a[1]);
}

const texto = obterTextoVisivel();
const frequencias = contarPalavras(texto);

chrome.runtime.sendMessage({ type: "contagemPalavras", dados: frequencias });

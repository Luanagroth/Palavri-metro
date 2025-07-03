let palavraContagem = [];

document.getElementById("analisar").addEventListener("click", () => {
  const botao = document.getElementById("analisar");
  const tbody = document.querySelector("#resultado tbody");
  botao.disabled = true;
  tbody.innerHTML = "<tr><td colspan='2'>Analisando...</td></tr>";

  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  });
});

// Recebe dados do content.js
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "contagemPalavras") {
    const tbody = document.querySelector("#resultado tbody");
    const totalSpan = document.getElementById("totalPalavras");

    palavraContagem = message.dados.sort((a, b) => b[1] - a[1]);

    tbody.innerHTML = "";
    const fragment = document.createDocumentFragment();

    palavraContagem.forEach(([palavra, contagem]) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${palavra}</td><td>${contagem}</td>`;
      fragment.appendChild(row);
    });

    tbody.appendChild(fragment);
    totalSpan.textContent = `Palavras diferentes: ${palavraContagem.length}`;
    document.getElementById("analisar").disabled = false;
  }
});

document.getElementById("buscarPalavra").addEventListener("click", () => {
  const palavra = document.getElementById("palavraBuscada").value.toLowerCase();
  const resultadoBusca = document.getElementById("resultadoBusca");
  document.getElementById("palavraBuscada").value = ""; // limpa o campo

  if (!palavra) {
    resultadoBusca.textContent = "Digite uma palavra.";
    return;
  }

  const linhaEncontrada = palavraContagem.find(([p]) => p === palavra);

  if (linhaEncontrada) {
    resultadoBusca.textContent = `A palavra "${palavra}" aparece ${linhaEncontrada[1]} vezes.`;
  } else {
    resultadoBusca.textContent = `A palavra "${palavra}" não foi encontrada.`;
  }
});

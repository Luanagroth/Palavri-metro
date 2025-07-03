# Palavri-metro
# 🧠 Palavri-metro

Uma extensão do Google Chrome para **analisar as palavras mais frequentes** de qualquer página da web, de forma simples, rápida e intuitiva.

> 🔍 **Descubra quais palavras dominam o conteúdo de uma página!**

---

## 📌 O que é?

**Palavri-metro** é uma extensão que escaneia o texto visível da página atual, elimina palavras comuns (como "de", "o", "e", "para") e mostra uma tabela com as palavras mais utilizadas, ordenadas por frequência.

Além disso, você pode buscar por uma palavra específica e saber quantas vezes ela aparece.

---

## 🧩 Funcionalidades

✅ Analisar palavras mais frequentes  
🔤 Buscar palavra específica  
🧹 Ignora palavras comuns automaticamente (stopwords)  
📊 Mostra o total de palavras diferentes  
📎 Interface leve e fácil de usar

---

## 🖼️ Interface

Ao clicar na extensão, você verá:

- Um botão "Analisar Página"
- Uma tabela com palavras e contagens
- Um campo para buscar palavra específica
- Total de palavras diferentes encontradas

---

## 📂 Estrutura dos Arquivos

```plaintext
📁 palavri-metro/
├── background.js        # Service Worker: loga instalação
├── content.js           # Captura e processa o texto da página
├── manifest.json        # Configurações da extensão (Manifest V3)
├── popup.html           # Interface da extensão (HTML)
├── popup.js             # Lógica da interface (JS)
└── README.md            # Este arquivo de documentação
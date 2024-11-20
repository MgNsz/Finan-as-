document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const pix = document.getElementById("pix").value.trim();
    const email = document.getElementById("email").value.trim();
    const valor = parseFloat(document.getElementById("valor").value);
    const juros = parseFloat(document.getElementById("juros").value);
  
    const tabela = document.getElementById("clientesTable").querySelector("tbody");
    const novaLinha = tabela.insertRow();
    novaLinha.innerHTML = `
      <td>${nome}</td>
      <td>${cpf}</td>
      <td>${pix}</td>
      <td>${email}</td>
      <td>R$ ${valor.toFixed(2)}</td>
      <td>${juros.toFixed(2)}%</td>
    `;
    document.getElementById("cadastroForm").reset();
  });
  
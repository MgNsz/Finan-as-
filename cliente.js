// Dados de exemplo para o cliente
const dadosCliente = [
    {
      descricao: "Empréstimo Pessoal",
      valor: 1500.00,
      juros: 3.5,
      parcelasRestantes: 5,
      totalDevido: 1600.00
    },
    {
      descricao: "Cartão de Crédito",
      valor: 1200.00,
      juros: 5.0,
      parcelasRestantes: 3,
      totalDevido: 1260.00
    },
    {
      descricao: "Financiamento de Carro",
      valor: 10000.00,
      juros: 4.0,
      parcelasRestantes: 12,
      totalDevido: 10480.00
    }
  ];
  
  // Preencher a tabela com os dados do cliente
  const tabela = document.getElementById("valoresTable").querySelector("tbody");
  
  dadosCliente.forEach(item => {
    const linha = tabela.insertRow();
    linha.innerHTML = `
      <td>${item.descricao}</td>
      <td>R$ ${item.valor.toFixed(2)}</td>
      <td>${item.juros.toFixed(2)}%</td>
      <td>Parcelas restantes: ${item.parcelasRestantes}</td>
      <td>Total Devido: R$ ${item.totalDevido.toFixed(2)}</td>
    `;
  });
  
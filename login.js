// JavaScript para manipular login com CPFs de teste
const admCPF = "000.000.000-00";
const clienteCPF = "111.111.111-11";

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  const cpf = document.getElementById("cpf").value.trim();

  if (cpf === admCPF) {
    window.location.href = "admin.html"; // Redireciona para a área de administrador
  } else if (cpf === clienteCPF) {
    window.location.href = "cliente.html"; // Redireciona para a área de cliente
  } else {
    alert("CPF inválido ou não cadastrado.");
  }
});

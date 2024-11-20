document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const cpf = document.getElementById("cpf").value.trim();
  
    // Verificar CPF e redirecionar
    if (cpf === "000.000.000-00") {
      window.location.href = "admin.html";  // Redireciona para a área administrativa
    } else if (cpf === "111.111.111-11") {
      window.location.href = "cliente.html";  // Redireciona para a área do cliente
    } else {
      alert("CPF inválido!");  // Exibe um alerta se o CPF não for válido
    }
  });
  
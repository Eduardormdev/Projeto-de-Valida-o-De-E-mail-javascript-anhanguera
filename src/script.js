// Seleciona os elementos da página
var email_input = document.querySelector(".email_input input");
const btn_envio = document.querySelector(".email_input button");
let lista_Emails = [];

// Função para validar e-mail
function validarEmail(email) {
  // Regex básica para validar estrutura de e-mail
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Função para criar a lista dinâmica
function criarLista() {
  let tabela = "<tr><th>Email</th><th>Ações</th></tr>";

  for (let i = 0; i < lista_Emails.length; i++) {
    tabela +=
      "<tr><td>" +
      lista_Emails[i] +
      "</td>" +
      "<td>" +
      "<button class='btn btn-success' onclick='editar(" +
      i +
      ")'>Editar</button> " +
      "<button class='btn btn-danger' onclick='excluir(" +
      i +
      ")'>Excluir</button>" +
      "</td></tr>";
  }

  document.getElementById("tabela_emails").innerHTML = tabela;
}

// Função chamada ao clicar no botão "Enviar"
function Email() {
  var email = email_input.value.trim();

  // Verifica se o campo está vazio
  if (email === "") {
    alert("O campo de e-mail não pode estar vazio!");
    email_input.classList.remove("success");
    email_input.classList.add("error");
    return; // interrompe a execução
  }

  if (validarEmail(email)) {
    email_input.classList.remove("error");
    email_input.classList.add("success");

    // Adiciona o e-mail à lista e recria a tabela
    lista_Emails.push(email);
    criarLista();

    alert("E-mail válido! Salvo com sucesso.");
    email_input.value = ""; // limpa o campo
  } else {
    email_input.classList.remove("success");
    email_input.classList.add("error");
    alert("E-mail inválido! Use o formato: nome@dominio.com");
  }
}

// Função para editar um email da lista
function editar(index) {
  const novoEmail = prompt("Digite o novo email:", lista_Emails[index]);
  if (novoEmail && validarEmail(novoEmail)) {
    lista_Emails[index] = novoEmail;
    criarLista();
  } else {
    alert("E-mail inválido!");
  }
}

// Função para excluir um email da lista
function excluir(index) {
  if (confirm("Tem certeza que deseja excluir este email?")) {
    lista_Emails.splice(index, 1);
    criarLista();
  }
}

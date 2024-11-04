$(document).ready(function() {
  
  // Abre a página com botões filhos escondidos
  $(".child-buttons").hide();

  // Exibe os botões ao clicar em Currículo
  $("#fab").click(function() {
      $(".child-buttons").show();
      $(this).addClass("hover-active"); // Adiciona a classe que mantém o estilo de hover
    });
  });

  // Esconde os botões ao dar duplo clique em Currículo
  $("#fab").dblclick(function() {
      $(".child-buttons").hide();
      $(this).removeClass("hover-active"); // Remove a classe de hover
            });

                

function setActivePanel(index) {
  // Seleciona todos os elementos com a classe 'panel' e os armazena em uma NodeList
  const panels = document.querySelectorAll(".panel");

  // Remove a classe 'active' de todos os painéis
  panels.forEach((panel, i) => {
    panel.classList.remove("active"); // Para cada painel, remove a classe 'active'
  });

  // Adiciona a classe 'active' ao painel que corresponde ao índice fornecido
  panels[index].classList.add("active");

  // Redefine a transformação dos painéis após um pequeno atraso
  setTimeout(() => {
    // Itera sobre os painéis para resetar a transformação
    panels.forEach((panel, i) => {
      if (i !== index) {
        panel.style.transform = ""; // Reseta a transformação dos painéis que não estão ativos
      }
    });
  }, 300); // O tempo deve corresponder ao tempo de transição CSS
}

function mostrarPainel(numeroDoPainel) {
  // Seleciona todos os elementos com a classe 'panel'
  const paineis = document.querySelectorAll("panel");

  // Função para alternar entre painéis ativos e inativos
  paineis.forEach((painel, index) => {
    if (index === numeroDoPainel - 1) {
      // Se o índice do painel atual é igual ao número do painel desejado (ajustado para zero)
      painel.classList.add("active"); // Adiciona a classe 'active' ao painel
      painel.classList.remove("inactive"); // Remove a classe 'inactive'
    } else {
      // Se o índice do painel atual não é o desejado
      painel.classList.add("inactive"); // Adiciona a classe 'inactive'
      painel.classList.remove("active"); // Remove a classe 'active'
    }
  });
}

//Funcionamento do formulário em contato.

document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const assunto = document.getElementById('assunto').value;
  const mensagem = document.getElementById('mensagem').value;

  try {
    const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, assunto, mensagem })
    });

    const result = await response.json();
    document.getElementById('responseMessage').innerText = result.message;
  } catch (error) {
    console.error('Erro ao enviar:', error);
    document.getElementById('responseMessage').innerText = 'Erro ao enviar o email'};})
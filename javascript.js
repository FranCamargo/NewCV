$(document).ready(function () {
 
  // Abre a página com botões filhos escondidos
  $(".child-buttons").hide();

  // Exibe os botões ao clicar em "Currículo"
  $("#fab").click(function () {
    $(".child-buttons").show(); // Exibe os botões filhos
    $(this).addClass("hover-active"); // Adiciona classe que mantém o estilo de hover
  });

  // Esconde os botões ao dar duplo clique em "Currículo"
  $("#fab").dblclick(function () {
    $(".child-buttons").hide(); // Oculta os botões filhos
    $(this).removeClass("hover-active"); // Remove a classe de hover
  });
});

function setActivePanel(index) {
  // Seleciona todos os elementos com a classe 'panel'
  const panels = document.querySelectorAll(".panel");

  // Remove a classe 'active' de todos os painéis
  panels.forEach((panel, i) => {
    panel.classList.remove("active"); // Remove a classe 'active' de cada painel
  });

  // Adiciona a classe 'active' ao painel que corresponde ao índice fornecido
  panels[index].classList.add("active");

  // Redefine a transformação dos painéis após um pequeno atraso
  setTimeout(() => {
    // Itera sobre os painéis para resetar a transformação
    panels.forEach((panel, i) => {
      if (i !== index) {
        panel.style.transform = ""; // Reseta a transformação dos painéis não ativos
      }
    });
  }, 300); // O tempo deve corresponder ao tempo de transição CSS

  // Atualiza o ano automaticamente no elemento com ID 'currentYear'
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function mostrarPainel(numeroDoPainel) {
  // Seleciona todos os elementos com a classe 'panel'
  const paineis = document.querySelectorAll(".panel");

  // Alterna entre painéis ativos e inativos
  paineis.forEach((painel, index) => {
    if (index === numeroDoPainel - 1) {
      painel.classList.add("active"); // Adiciona 'active' ao painel desejado
      painel.classList.remove("inactive"); // Remove 'inactive'
    } else {
      painel.classList.add("inactive"); // Adiciona 'inactive' aos outros painéis
      painel.classList.remove("active"); // Remove 'active' dos outros painéis
    }
  });
}
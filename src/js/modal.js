
    // Obtenha os elementos DOM
    var modal = document.getElementById("myModal");

    // Quando a página carregar, mostre a modal
    window.onload = function () {
      modal.style.display = "block";
    };

    // Função para fechar a modal
    function closeModal() {
      modal.style.display = "none";
    }

    // Também, se o usuário clicar fora da modal, esconda-a
    window.onclick = function (event) {
      if (event.target === modal) {
        closeModal();
      }
    };
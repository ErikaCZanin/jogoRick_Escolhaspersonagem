function jogar() {
  idade = document.getElementById("idade").value;
  escolhaPersonagem = document.getElementById("escolhaPersonagem").value;

  if (idade == '') {
    alert("Digite sua idade para continuar");
  }

  if (idade !== '' && (idade == 0 || idade < 18)) {
    alert("Você NÃO pode jogar");
  }

  personagemUsuario = 0;

  if (escolhaPersonagem == "Rick") {
    personagemUsuario = 1;
  }

  if (escolhaPersonagem == "Morty") {
    personagemUsuario = 2;
  }

  if (escolhaPersonagem == "Jerry") {
    personagemUsuario = 3;
  }

  if (idade >= 18) {
    escolhaJogador = personagemUsuario;
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    //Rick 1; Morty 2; Jerry 3

    //Rick > Morty
    //Morty > Jerry
    //Jerry > Rick

    //Jogador escolhe Rick e computador Morty = jogador ganha

    personagemComputador = "";

    if (escolhaComputador == 1) {
      personagemComputador = "Rick";
    }

    if (escolhaComputador == 2) {
      personagemComputador = "Morty";
    }

    if (escolhaComputador == 3) {
      personagemComputador = "Jerry";
    }

    if (escolhaJogador == escolhaComputador) {
      alert("Empate, computador escolheu: " + personagemComputador);
    }

    if (escolhaJogador == 1) {
      if (escolhaComputador == 2) {
        //Jogador escolhe Rick e computador Morty = jogador ganha
        alert("Jogador ganhou, computador escolheu: " + personagemComputador);
      }

      if (escolhaComputador == 3) {
        //Jogador escolhe Rick e computador Jerry = computador ganha
        alert("Computador ganhou, computador escolheu: " + personagemComputador);
      }
    }

    if (escolhaJogador == 2) {
      if (escolhaComputador == 1) {
        //Jogador escolhe Morty e computador Rick = jogador ganha
        alert(
          "Jogador ganhou, computador escolheu: " + personagemComputador
        );
      }
      if (escolhaComputador == 3) {
        //Jogdor escolhe Morty e o computador Jerry = computador ganha
        alert(
          "Computador ganhou, computador escolheu: " + personagemComputador
        );
      }
    }

    if (escolhaJogador == 3) {
      if (escolhaComputador == 1) {
        //Jogador escolhe Jerry e computador Rick = jogador ganha
        alert(
          "Jogador ganhou, computador escolheu: " + personagemComputador
        );
      }

      if (escolhaComputador == 2) {
        //Jogador escolhe Jerry e computador Morty = computador ganha
        alert(
          "Computador ganhou, computador escolheu: " + personagemComputador
        );
      }
    }
  }
}

document.querySelectorAll('.btnList').forEach(item => {
  item.addEventListener('click', function () {
    const navBar = document.querySelector('.navbar');
    const content = document.querySelector('.content');
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    const body = document.querySelector('body');
    const html = document.querySelector('html');

    if (navBar) {
      // Aplica a transição no JavaScript
      content?.style.setProperty('transition', 'margin-top 0.5s ease');
      body?.style.setProperty('transition', 'height 0.5s ease');
      html?.style.setProperty('transition', 'height 0.5s ease');
      item?.style.setProperty('transition', 'width 0.5s ease');

      if (navBar.style.height && navBar.style.height !== '0px') {
        navBar.style.height = '0px';
        item.style.width = '30%';
        body.style.height = '100%';
        html.style.height = '100%';

        // Remove a margem se for tela pequena
        if (isSmallScreen && content) {
          content.style.marginTop = '0px';
        }
      } else {
        navBar.style.height = navBar.scrollHeight + 'px';

        // Ajusta a largura de acordo com o tamanho da tela
        if (isSmallScreen) {
          item.style.width = '60%';
          content.style.marginTop = (navBar.scrollHeight + 30) + 'px';
          body.style.height = '110%';
          html.style.height = '110%';
        } else {
          item.style.width = '100%';
        }
      }
    }
  });
});

const perguntasFaq = document.querySelectorAll('.faq-pergunta');

perguntasFaq.forEach((pergunta) => {

  pergunta.addEventListener('click', () => {

    const item = pergunta.parentElement;

    // fecha os outros
    document.querySelectorAll('.faq-item').forEach((faq) => {

      if (faq !== item) {
        faq.classList.remove('ativo');
      }

    });

    // abre o clicado
    item.classList.toggle('ativo');

  });

});

const linksMenu = document.querySelectorAll('.menu a');

linksMenu.forEach((link) => {
  link.addEventListener('click', () => {
    linksMenu.forEach((item) => item.classList.remove('ativo'));
    link.classList.add('ativo');
  });
});
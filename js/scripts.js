  // Modo Dark / Light
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('checkbox');
  const currentMode = localStorage.getItem('mode') || 'light';

  document.body.classList.add(currentMode + '-mode');

  toggleButton.addEventListener('click', () => {
      if (document.body.classList.contains('light-mode')) {
          document.body.classList.remove('light-mode');
          document.body.classList.add('dark-mode');
          localStorage.setItem('mode', 'dark');
      } else {
          document.body.classList.remove('dark-mode');
          document.body.classList.add('light-mode');
          localStorage.setItem('mode', 'light');
      }
  });

  // Validação do formulário de e-mail
  const form = document.querySelector('form');
  const emailInput = document.querySelector('#input-email');

  if (form && emailInput) {
    form.addEventListener('submit', function(event) {
      const email = emailInput.value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        event.preventDefault();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Por favor, insira um endereço de e-mail válido!',
        });
      } else {
        event.preventDefault();

        Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'O endereço de e-mail é válido.',
        }).then(() => {
          form.submit();
        });
      }
    });
  }

  // Botão voltar ao topo
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (backToTopBtn) {
      window.onscroll = function() {
          if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
              backToTopBtn.style.display = 'block';
          } else {
              backToTopBtn.style.display = 'none';
          }
      };

      backToTopBtn.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
});

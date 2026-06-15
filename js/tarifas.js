  const tabs = document.querySelectorAll('.tab');
  const contenidos = document.querySelectorAll('.contenido');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {

      tabs.forEach(btn => btn.classList.remove('active'));
      contenidos.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');

      const id = tab.dataset.tab;
      document.getElementById(id).classList.add('active');
    });
  });
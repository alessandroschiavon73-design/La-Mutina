const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`Richiesta La Mutina — ${data.get('tipo') || 'Informazioni'}`);
    const body = encodeURIComponent(
      `Nome: ${data.get('nome')}
Azienda: ${data.get('azienda')}
Email: ${data.get('email')}
Telefono: ${data.get('telefono')}
Interesse: ${data.get('tipo')}

Messaggio:
${data.get('messaggio')}`
    );
    window.location.href = `mailto:info@lamutina.it?subject=${subject}&body=${body}`;
  });
}

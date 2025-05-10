// Animation lors du scroll
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visible = 100;

    if (elementTop < windowHeight - visible) {
      el.classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);

// Animation bouton après délai sur la page index
setTimeout(() => {
  const btn = document.querySelector('.btn-whatsapp');
  btn.style.backgroundColor = '#25d366';  // Reste la couleur de base
  
}, 12000);

// Assure que les animations de zoom et lumière continuent même après le clic
const button = document.querySelector('.btn-whatsapp');
if (button) {
  button.classList.add('active');
}

// Optionnel : Appliquer les animations sur les boutons dès que la page se charge
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.btn-whatsapp');
  btns.forEach((btn) => {
    btn.classList.add('active');
  });
});

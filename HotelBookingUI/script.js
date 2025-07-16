
function toggleMobileMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}


document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('active');
  });
});


document.addEventListener('click', (e) => {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  
  if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
    navbar.classList.remove('active');
  }
});

(function(){
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  document.getElementById('year')?.textContent = new Date().getFullYear();
  document.getElementById('year2')?.textContent = new Date().getFullYear();
  document.getElementById('year3')?.textContent = new Date().getFullYear();
  document.getElementById('year4')?.textContent = new Date().getFullYear();
})();

(function(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-list');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
})();

(function(){
  const mailtoBtn = document.getElementById('mailtoBtn');
  const contactForm = document.getElementById('contactForm');

  if(mailtoBtn){
    mailtoBtn.addEventListener('click', () => {
      const name = document.getElementById('name')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const message = document.getElementById('message')?.value || '';
      const subject = encodeURIComponent('Kontakt nga faqja — ' + (name || 'Vizitor'));
      const body = encodeURIComponent(`Emri: ${name}\nEmail: ${email}\n\nMesazhi:\n${message}`);
      const mailto = `mailto:dritonbublaku@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    });
  }

  if(contactForm){
    contactForm.addEventListener('submit', (e) => {
      const action = contactForm.getAttribute('action') || '';
      if(action.includes('formspree.io/f/YOUR_FORMSPREE_ID')){
        e.preventDefault();
        alert('Formspree nuk është i konfiguruar. Për t\'i dërguar mesazhe automatikisht në email, zëvendësoni "YOUR_FORMSPREE_ID" me ID-në tuaj të Formspree (shiko udhëzimet në README). Si alternativë përdorni butonin "Dërgo me Email" përmes klientit tuaj të email-it.');
      } else {
      }
    });
  }
  
  document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
})();
document.addEventListener("click", function(e) {
  const lightbox = document.getElementById("lightbox") || (() => {
    const box = document.createElement("div");
    box.id = "lightbox";
    document.body.appendChild(box);
    return box;
  })();

  if (e.target.tagName === "IMG" && e.target.closest(".gallery")) {
    lightbox.innerHTML = `<img src="${e.target.src}" alt="">`;
    lightbox.style.display = "flex";
    setTimeout(() => lightbox.classList.add("show"), 10);
  } else if (e.target.id === "lightbox") {
    lightbox.classList.remove("show");
    setTimeout(() => lightbox.style.display = "none", 200);
  }
});
// Theme toggle, accordion panels, and image modal
(function(){
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if(saved) root.setAttribute('data-theme', saved);
  themeToggle && themeToggle.addEventListener('click', ()=>{
    const cur = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', cur);
    localStorage.setItem('theme', cur);
    themeToggle.setAttribute('aria-pressed', String(cur==='light'));
  });

  // Accordion
  document.querySelectorAll('.panel-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const panel = btn.closest('.panel');
      const wasOpen = panel.classList.contains('open');
      document.querySelectorAll('.panel.open').forEach(p=>p.classList.remove('open'));
      if(!wasOpen) panel.classList.add('open');
    });
  });

  // Image modal
  const modal = document.getElementById('img-modal');
  const modalImg = modal && modal.querySelector('.modal-img');
  const modalCaption = modal && modal.querySelector('.modal-caption');
  document.querySelectorAll('#dance-journey img').forEach(img=>{
    img.addEventListener('click', ()=>{
      modalImg.src = img.src;
      modalImg.alt = img.alt || '';
      modalCaption.textContent = img.nextElementSibling && img.nextElementSibling.textContent || '';
      modal.setAttribute('aria-hidden','false');
    });
  });
  modal && modal.querySelector('.modal-close').addEventListener('click', ()=>modal.setAttribute('aria-hidden','true'));
  window.addEventListener('keydown', e=>{ if(e.key==='Escape') modal && modal.setAttribute('aria-hidden','true') });
})();

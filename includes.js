(async function loadSharedIncludes() {
  const loadInclude = async (selector, file) => {
    const target = document.querySelector(selector);
    if (!target) return;

    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Unable to load ${file}`);
    }
    target.innerHTML = await response.text();
  };

  await Promise.all([
    loadInclude('#siteHeader', 'header.html'),
    loadInclude('#siteFooter', 'footer.html')
  ]);

  const navLinks = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');
  const currentPage = document.body.dataset.page || 'home';
  const isHomePage = currentPage === 'home';

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.dataset.page;
    if (linkPage === currentPage || (!linkPage && isHomePage && link.dataset.section === 'home')) {
      link.classList.add('active');
    }

    link.addEventListener('click', event => {
      if (navLinks) navLinks.classList.remove('active');

      const href = link.getAttribute('href');
      if (!href) return;

      const url = new URL(href, window.location.href);
      const samePage = url.pathname === window.location.pathname || url.pathname.endsWith('/index.html') && isHomePage;
      const targetId = url.hash;

      if (samePage && targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  window.dispatchEvent(new CustomEvent('siteIncludesLoaded'));
})();

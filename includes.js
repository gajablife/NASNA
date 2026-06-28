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
    loadInclude('#siteHeader', '/header.html'),
    loadInclude('#siteFooter', '/footer.html')
  ]);

  const navLinks = document.getElementById('navLinks');
  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.querySelector('.navbar');
  const currentPage = document.body.dataset.page || 'home';
  const isHomePage = currentPage === 'home';

  const updateHeaderSize = () => {
    if (!navbar) return;
    navbar.classList.toggle('is-scrolled', window.scrollY > 20);
  };
  updateHeaderSize();
  window.addEventListener('scroll', updateHeaderSize, { passive: true });

  const scrollToTarget = (targetElement, behavior = 'smooth') => {
    if (!targetElement) return;
    const headerHeight = navbar ? navbar.offsetHeight : 0;
    const targetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior
    });
  };

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
      const targetIsHome = url.pathname === '/' || url.pathname.endsWith('/index.html');
      const currentIsHome = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');
      const samePage = url.pathname === window.location.pathname || (targetIsHome && currentIsHome && isHomePage);
      const targetId = url.hash;

      if (samePage && targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          event.preventDefault();
          scrollToTarget(targetElement);
        }
      }
    });
  });

  if (window.location.hash) {
    const initialTarget = document.querySelector(window.location.hash);
    if (initialTarget) {
      requestAnimationFrame(() => scrollToTarget(initialTarget, 'auto'));
    }
  }

  window.dispatchEvent(new CustomEvent('siteIncludesLoaded'));
})();

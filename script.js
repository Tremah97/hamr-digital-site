document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('hamr-root');
  if (!root) return;

  const animateCount = (el) => {
    const raw = el.getAttribute('data-count');
    const target = parseFloat(raw);
    const dec = raw.indexOf('.') >= 0 ? 1 : 0;
    const suf = el.getAttribute('data-suffix') || '';
    const dur = 1400, start = performance.now();
    const step = (now) => {
      let p = Math.min(1, (now - start) / dur);
      p = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * p).toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const d = el.getAttribute('data-delay');
      if (d) el.style.transitionDelay = d + 'ms';
      if (el.hasAttribute('data-draw')) {
        el.style.strokeDashoffset = '0';
        const dot = root.querySelector('[data-travel]');
        if (dot) setTimeout(() => { dot.style.animation = 'hamrTravel 3.6s cubic-bezier(.4,0,.2,1) infinite'; }, 700);
      } else if (el.hasAttribute('data-bars')) {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.querySelectorAll('[data-bar]').forEach((bar, i) => {
          bar.style.transitionDelay = (i * 90) + 'ms';
          bar.style.transform = 'scaleY(1)';
        });
      } else if (el.hasAttribute('data-count')) {
        animateCount(el);
      } else {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  root.querySelectorAll('[data-reveal],[data-draw],[data-bars],[data-count]').forEach((el) => io.observe(el));

  root.querySelectorAll('[data-lift]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'translateY(-8px)';
      el.style.borderColor = 'rgba(217,201,163,0.45)';
      el.style.boxShadow = '0 22px 44px rgba(0,0,0,0.4)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'none';
      el.style.borderColor = 'rgba(217,201,163,0.16)';
      el.style.boxShadow = 'none';
    });
  });

  const phones = document.getElementById('phones-stack');
  if (phones) {
    const wrap = phones.parentElement;
    wrap.addEventListener('mousemove', (ev) => {
      const r = wrap.getBoundingClientRect();
      const px = (ev.clientX - r.left) / r.width - 0.5;
      const py = (ev.clientY - r.top) / r.height - 0.5;
      phones.style.transform = 'rotateY(' + (px * 10).toFixed(2) + 'deg) rotateX(' + (-py * 8).toFixed(2) + 'deg)';
    });
    wrap.addEventListener('mouseleave', () => { phones.style.transform = 'rotateY(0deg) rotateX(0deg)'; });
  }

  const phoneEls = Array.from(root.querySelectorAll('[data-phone]'));
  if (phoneEls.length) {
    const n = phoneEls.length;
    let active = Math.min(1, n - 1);
    let carousel;
    const layout = () => {
      phoneEls.forEach((p, i) => {
        const off = (i - active + n) % n;
        let tf, op, z, blur;
        if (off === 0) { tf = 'translate(-50%,-50%) scale(1) rotateY(0deg)'; op = 1; z = 3; blur = '0px'; }
        else if (off === 1) { tf = 'translate(-6%,-50%) scale(0.76) rotateY(-27deg)'; op = 0.9; z = 2; blur = '0.6px'; }
        else { tf = 'translate(-94%,-50%) scale(0.76) rotateY(27deg)'; op = 0.9; z = 1; blur = '0.6px'; }
        p.style.transform = tf;
        p.style.opacity = op;
        p.style.zIndex = z;
        p.style.filter = 'blur(' + blur + ')';
        p.style.cursor = off === 0 ? 'default' : 'pointer';
      });
    };
    const restart = () => {
      clearInterval(carousel);
      carousel = setInterval(() => { active = (active + 1) % n; layout(); }, 3800);
    };
    phoneEls.forEach((p, i) => p.addEventListener('click', () => { active = i; layout(); restart(); }));
    layout();
    restart();
  }

  const heroBg = document.getElementById('hero-bg');
  const progress = document.getElementById('scroll-progress');
  const onScroll = () => {
    const y = window.pageYOffset || 0;
    if (heroBg) heroBg.style.transform = 'translateY(' + (y * 0.18).toFixed(1) + 'px)';
    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? Math.min(100, (y / h) * 100) : 0) + '%';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const form = document.getElementById('contact-form');
  const formWrap = document.getElementById('contact-form-wrap');
  const successWrap = document.getElementById('contact-success');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formWrap) formWrap.style.display = 'none';
      if (successWrap) successWrap.style.display = 'block';
    });
  }
});

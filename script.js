
  /* ── VIDEO LAZY LOAD / CROSSFADE ─────────────
     Add more paths to this array as you create them.
     First video loads immediately; subsequent clips
     are fetched in the background while the current
     one plays, then crossfaded at the end.
  ───────────────────────────────────────────── */
  const PLAYLIST = [
    'videos/video1.mp4',
    'videos/video2.mp4',
    'videos/video3.mp4',
    'videos/video4.mp4',
    'videos/video5.mp4',
  ];

  const FADE_DURATION = 700;    // ms — must match CSS transition
  const CROSSFADE_BEFORE = 0.8; // seconds before end to start fade

  const vA = document.getElementById('videoA');
  const vB = document.getElementById('videoB');
  let current    = 0;
  let activeEl   = vA;
  let standbyEl  = vB;
  let fading     = false;

  function loadVideo(el, src) {
    return new Promise(resolve => {
      el.src = src;
      el.load();
      el.addEventListener('canplaythrough', resolve, { once: true });
    });
  }

  async function crossfadeTo(nextIdx) {
    if (fading) return;
    fading = true;

    // Standby is already preloaded — just make sure
    if (standbyEl.src !== location.origin + '/' + PLAYLIST[nextIdx]) {
      await loadVideo(standbyEl, PLAYLIST[nextIdx]);
    }
    standbyEl.currentTime = 0;
    standbyEl.play();

    // Bring standby on top, fade it in / fade active out
    standbyEl.style.zIndex = '1';
    activeEl.style.zIndex  = '0';
    standbyEl.classList.remove('hidden');
    activeEl.classList.add('hidden');

    setTimeout(() => {
      current   = nextIdx;
      activeEl.pause();
      activeEl.removeAttribute('src');
      [activeEl, standbyEl] = [standbyEl, activeEl];
      fading = false;
      preloadNext();
    }, FADE_DURATION + 200);
  }

  function preloadNext() {
    if (PLAYLIST.length <= 1) return;
    const nextIdx = (current + 1) % PLAYLIST.length;
    loadVideo(standbyEl, PLAYLIST[nextIdx]); // silent background load
  }

  function onTimeUpdate() {
    if (!this.duration) return;
    const remaining = this.duration - this.currentTime;
    if (remaining <= CROSSFADE_BEFORE && !fading) {
      const nextIdx = (current + 1) % PLAYLIST.length;
      if (PLAYLIST.length === 1) {
        // single video — loop without crossfade
        return;
      }
      crossfadeTo(nextIdx);
    }
  }

  // Bootstrap
  loadVideo(vA, PLAYLIST[0]).then(() => {
    vA.loop = PLAYLIST.length === 1;
    vA.play();
    preloadNext();
  });

  vA.addEventListener('timeupdate', onTimeUpdate);
  vB.addEventListener('timeupdate', onTimeUpdate);


  /* ── MODAL ───────────────────────────────── */
  const backdrop = document.getElementById('modalBackdrop');
  const openBtn  = document.getElementById('openModal');
  const closeBtn = document.getElementById('closeModal');

  openBtn.addEventListener('click', e => {
    e.preventDefault();
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  /* ── CARD SCROLL ANIMATION ───────────────── */
  const cards = document.querySelectorAll('.amenity-card');
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const delay = card.dataset.delay || 0;
        setTimeout(() => card.classList.add('is-visible'), delay);
        cardObserver.unobserve(card);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach((card, i) => {
    card.dataset.delay = i * 120;
    cardObserver.observe(card);
  });


  window.switchPlan = function(idx, btn) {
    document.querySelectorAll('.plan-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.plans-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('plan-' + idx).classList.add('active');
    btn.classList.add('active');
  };

  function handleSubmit(e) {
    e.preventDefault();
    const phone = document.getElementById('phoneInput').value.trim();
    if (!phone) return;
    // TODO: replace with real API / CRM call
    console.log('Phone submitted:', phone);
    // Success state
    const form = document.getElementById('viewingForm');
    form.innerHTML = `
      <p style="font-family:'Cinzel',serif;font-size:1rem;letter-spacing:.1em;color:#fff;margin-bottom:12px;">Thank you</p>
      <p style="font-family:'Raleway',sans-serif;font-weight:200;font-size:.7rem;letter-spacing:.1em;color:rgba(255,255,255,.5);line-height:1.8;">
        We will call you back within 24 hours.
      </p>
    `;
  }



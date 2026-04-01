
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

  function openModal(e) {
    e.preventDefault();
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  openBtn.addEventListener('click', openModal);

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



function handlePresForm(e) {
  e.preventDefault();
  const phone = document.getElementById('presPhone');
  const digits = phone.value.replace(/\D/g, '');
  if (digits.length < 7) {
    phone.setCustomValidity('Please, fill out the form');
    phone.reportValidity();
    return;
  }
  phone.setCustomValidity('');

  const wrap = e.target.closest('.pres-form-wrap');
  const mockup = wrap.querySelector('.pres-mockup');

  // fade out current content
  wrap.style.transition = 'opacity .4s ease';
  wrap.style.opacity = '0';

  setTimeout(function() {
    var currentHeight = wrap.offsetHeight;
    wrap.style.minHeight = currentHeight + 'px';
    wrap.style.display = 'flex';
    wrap.style.alignItems = 'center';
    wrap.style.justifyContent = 'center';
    wrap.innerHTML = `
      <div style="width:100%;background:rgba(20,20,22,0.80);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:73px 62px 57px;box-sizing:border-box;text-align:center;">
        <div>
          <p style="font-family:'Cinzel',serif;font-weight:600;font-size:clamp(1.6rem,3vw,2.6rem);letter-spacing:.08em;text-transform:uppercase;color:#fff;margin-bottom:20px;">THANK YOU!</p>
          <p style="font-family:'Raleway',sans-serif;font-weight:300;font-size:clamp(.85rem,1.1vw,1rem);letter-spacing:.06em;color:rgba(255,255,255,0.75);line-height:1.9;max-width:420px;margin:0 auto;">We'll send you the full presentation and contact you shortly to go over the details</p>
        </div>
      </div>
    `;
    wrap.style.opacity = '0';
    requestAnimationFrame(function() {
      wrap.style.transition = 'opacity .5s ease';
      wrap.style.opacity = '1';
    });
  }, 400);
}

/* ── PHONE INPUT (block 4 & 7) — clear validity on input ── */
['presPhone','mtnPhone','pricingPhone'].forEach(function(id) {
  var inp = document.getElementById(id);
  if (inp) inp.addEventListener('input', function() { this.setCustomValidity(''); });
});


/* ── PRICING MODAL ─────────────────────── */
var pricingBackdrop = document.getElementById('pricingBackdrop');

function openPricingModal() {
  pricingBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePricingModal() {
  pricingBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}
pricingBackdrop.addEventListener('click', function(e) {
  if (e.target === pricingBackdrop) closePricingModal();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && pricingBackdrop.classList.contains('open')) closePricingModal();
});

function handlePricingForm(e) {
  e.preventDefault();
  var phone = document.getElementById('pricingPhone');
  var digits = phone.value.replace(/\D/g, '');
  if (digits.length < 7) {
    phone.setCustomValidity('Please, fill out the form');
    phone.reportValidity();
    return;
  }
  phone.setCustomValidity('');
  console.log('Pricing phone submitted:', digits);
  var form = document.getElementById('pricingForm');
  form.innerHTML = '<p style="font-family:\'Cinzel\',serif;font-size:clamp(1.2rem,2vw,1.6rem);letter-spacing:.08em;text-transform:uppercase;color:#1c1c1e;margin-bottom:16px;">Thank you!</p><p style="font-family:\'Raleway\',sans-serif;font-weight:300;font-size:.92rem;letter-spacing:.04em;color:rgba(28,28,30,0.65);line-height:1.8;">We\'ll contact you shortly and send you<br>the full pricing and details.</p>';
  form.style.display = 'block';
  form.style.textAlign = 'center';
}

window.openPricingModal = openPricingModal;
window.closePricingModal = closePricingModal;
window.handlePricingForm = handlePricingForm;

function handleMtnForm(e) {
  e.preventDefault();
  const phone = document.getElementById('mtnPhone');
  const digits = phone.value.replace(/\D/g, '');
  if (digits.length < 7) {
    phone.setCustomValidity('Please, fill out the form');
    phone.reportValidity();
    return;
  }
  phone.setCustomValidity('');
  const card = e.target.closest('.mtn-card');
  card.style.transition = 'opacity .4s ease';
  card.style.opacity = '0';
  setTimeout(function() {
    var currentHeight = card.offsetHeight;
    card.style.minHeight = currentHeight + 'px';
    card.style.display = 'flex';
    card.style.alignItems = 'center';
    card.style.justifyContent = 'center';
    card.innerHTML = `
      <div style="text-align:center;">
        <p style="font-family:'Cinzel',serif;font-weight:600;font-size:clamp(1.6rem,3vw,2.6rem);letter-spacing:.08em;text-transform:uppercase;color:#1c1c1e;margin-bottom:20px;">THANK YOU!</p>
        <p style="font-family:'Raleway',sans-serif;font-weight:300;font-size:clamp(.85rem,1.1vw,1rem);letter-spacing:.06em;color:rgba(28,28,30,0.65);line-height:1.9;max-width:420px;margin:0 auto;">We'll contact you shortly to answer your questions and guide you through the project, layouts, and pricing.</p>
      </div>
    `;
    card.style.opacity = '0';
    requestAnimationFrame(function() {
      card.style.transition = 'opacity .5s ease';
      card.style.opacity = '1';
    });
  }, 400);
}

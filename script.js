// ─── Messages ───────────────────────────────────────────
const messages = {
  "4/5":  { icon: "🌱", text: "29 days from now, the world celebrates one of its finest. It only makes sense to start counting down for someone as extraordinary as you." },
  "4/6":  { icon: "🕊️", text: "There is a gentleness in the way you exist — unhurried, unforced. Like morning light that doesn't ask permission to fill a room." },
  "4/7":  { icon: "🌿", text: "The people lucky enough to know you carry a little more warmth in their day. That is your quiet, beautiful gift to the world." },
  "4/8":  { icon: "💧", text: "You have a rare kind of strength — the kind that doesn't make noise, but quietly holds everything together." },
  "4/9":  { icon: "🌙", text: "On the days the world feels heavy, I hope you remember how much lighter you make it for everyone around you." },
  "4/10": { icon: "🌷", text: "Your kindness is never small. Every word you offer with care leaves a mark bigger than you know." },
  "4/11": { icon: "✨", text: "Some people walk into a room and change the temperature of it — warmer, softer, more alive. You are that kind of person." },
  "4/12": { icon: "🌸", text: "The closer your birthday gets, the more the universe prepares — as if even the stars know someone worth celebrating is almost here." },
  "4/13": { icon: "✨", text: "Everything turns to gold by your touch." },
  "4/14": { icon: "🌙", text: "No girl can outshine you — those moons get their light from you." },
  "4/15": { icon: "🕊️", text: "You're one of the kindest souls I've ever met." },
  "4/16": { icon: "🌷", text: "Your presence makes ordinary days feel like something worth keeping." },
  "4/17": { icon: "☀️", text: "Every conversation with you leaves me a little brighter." },
  "4/18": { icon: "💎", text: "Your thoughts are always so deep and meaningful." },
  "4/19": { icon: "🌊", text: "You are calm, strong, and beautiful — inside and out." },
  "4/20": { icon: "🤍", text: "I'm genuinely lucky to have you as my closest friend." },
  "4/21": { icon: "🪷", text: "Thank you for always being real. The world needs more of that." },
  "4/22": { icon: "🌍", text: "You're the kind of person this world needs more of." },
  "4/23": { icon: "💌", text: "Your words stay with me far longer than you know." },
  "4/24": { icon: "🕯️", text: "You make even silence feel warm and held." },
  "4/25": { icon: "🫧", text: "You're more special than any words I could write here." },
  "4/26": { icon: "🌟", text: "You carry a light within you that no sun could match." },
  "4/27": { icon: "🌸", text: "May you always smile the way you deserve to — may the whole world come to you with the love you've always given so freely." },
  "4/28": { icon: "💐", text: "You're a rare bouquet of grace and strength. Diamonds were inspired by you." },
  "4/29": { icon: "☮️", text: "Your presence is peace itself. We could honestly write your name instead of the word." },
  "4/30": { icon: "⭐", text: "Even the stars envy your glow — because they can't shine the way your eyes do." },
  "5/1":  { icon: "🎁", text: "Your friendship is a gift I will never take for granted — not for a single day." },
  "5/2":  { icon: "🌺", text: "Thank you for existing exactly the way you do. The world is genuinely better for it." },
  "5/3":  { icon: "🥁", text: "One day left. One day until the girl who has quietly made so many moments more beautiful gets a whole day made entirely for her. You deserve every second of it." },
  "5/4":  {
    icon: "🎂",
    text: "Today, the world is yours.\n\nHappy Birthday, Rimsha. 🎉\n\nYou came into this life like a quiet morning — soft, golden, and full of warmth that grows deeper the longer you stay. This past year, you've carried things with grace that most people couldn't even name. You've given your kindness freely and your presence generously.\n\nI hope this birthday wraps around you like the warmest embrace — that every hour of this day feels as beautiful as you make everything around you feel.\n\nMay the year ahead be filled with things that make your heart full: laughter that catches you off guard, peace that stays, and love in every direction you turn.\n\nThe world is better — genuinely, quietly better — because you are in it. 🌸👑"
  }
};

// ─── Reveal daily message ────────────────────────────────
function revealMessage() {
  const now = new Date();
  const key = `${now.getMonth() + 1}/${now.getDate()}`;
  const entry = messages[key];
  const dateEl = document.getElementById('msgDate');
  const iconEl = document.getElementById('msgIcon');
  const bodyEl = document.getElementById('msgBody');

  dateEl.textContent = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  if (entry) {
    iconEl.textContent = entry.icon;
    if (key === '5/4') {
      bodyEl.innerHTML = entry.text.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
      document.getElementById('bdayMsg').innerHTML = entry.text.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
      setTimeout(() => {
        document.getElementById('bdayOverlay').classList.add('show');
        startConfetti();
      }, 800);
    } else {
      bodyEl.textContent = entry.text;
    }
  } else {
    iconEl.textContent = '🌸';
    bodyEl.classList.add('msg-early');
    bodyEl.textContent = 'A little too early… come back tomorrow 🌸';
  }
}

// ─── Countdown timer ─────────────────────────────────────
const birthday = new Date("May 4, 2026 00:00:00").getTime();
function pad(n) { return String(n).padStart(2, '0'); }

function tick() {
  const dist = birthday - Date.now();
  if (dist <= 0) {
    ['cd-d','cd-h','cd-m','cd-s'].forEach(id => document.getElementById(id).textContent = '00');
    return;
  }
  document.getElementById('cd-d').textContent = pad(Math.floor(dist / 86400000));
  document.getElementById('cd-h').textContent = pad(Math.floor((dist % 86400000) / 3600000));
  document.getElementById('cd-m').textContent = pad(Math.floor((dist % 3600000) / 60000));
  const sEl = document.getElementById('cd-s');
  const newS = pad(Math.floor((dist % 60000) / 1000));
  if (sEl.textContent !== newS) {
    sEl.style.transform = 'scale(1.18)';
    setTimeout(() => sEl.style.transform = '', 130);
    sEl.textContent = newS;
  }
}
setInterval(tick, 1000);
tick();

// ─── Starfield ───────────────────────────────────────────
(function() {
  const c = document.getElementById('stars');
  const ctx = c.getContext('2d');
  let stars = [], sparkles = [], shooters = [];

  function resize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;

    // Regular stars — more of them, 3 size tiers
    stars = Array.from({length: 280}, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() < 0.15 ? (Math.random() * 1.2 + 1.2)   // large
       : Math.random() < 0.4  ? (Math.random() * 0.7 + 0.7)   // medium
       : (Math.random() * 0.4 + 0.15),                          // tiny
      phase: Math.random() * Math.PI * 2,
      speed: 0.002 + Math.random() * 0.007,
      color: Math.random() < 0.15 ? '255,220,180'              // warm gold
           : Math.random() < 0.1  ? '180,210,255'              // cool blue
           : '245,218,235'                                       // default pink-white
    }));

    // Sparkle/glitter stars — 4-pointed cross shape
    sparkles = Array.from({length: 18}, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      size: Math.random() * 4 + 3,
      phase: Math.random() * Math.PI * 2,
      speed: 0.004 + Math.random() * 0.006
    }));
  }

  // Spawn a shooting star occasionally
  function spawnShooter() {
    shooters.push({
      x: Math.random() * c.width * 0.8,
      y: Math.random() * c.height * 0.4,
      len: 80 + Math.random() * 80,
      speed: 6 + Math.random() * 5,
      angle: Math.PI / 5 + Math.random() * 0.3,
      alpha: 1,
      progress: 0
    });
  }
  setInterval(() => { if (Math.random() < 0.55) spawnShooter(); }, 2800);

  function drawSparkle(ctx, x, y, size, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = `rgba(255,230,170,${alpha})`;
    ctx.lineWidth = 0.8;
    // 4-point star cross
    ctx.beginPath();
    ctx.moveTo(x - size, y); ctx.lineTo(x + size, y);
    ctx.moveTo(x, y - size); ctx.lineTo(x, y + size);
    // Diagonal thinner arms
    const d = size * 0.5;
    ctx.moveTo(x - d, y - d); ctx.lineTo(x + d, y + d);
    ctx.moveTo(x + d, y - d); ctx.lineTo(x - d, y + d);
    ctx.stroke();
    // Centre dot
    ctx.beginPath(); ctx.arc(x, y, size * 0.18, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,248,210,${alpha})`;
    ctx.fill();
    ctx.restore();
  }

  function draw(t) {
    ctx.clearRect(0, 0, c.width, c.height);

    // Nebula soft glow patches
    const nebulae = [
      { x: c.width*0.72, y: c.height*0.18, r: c.width*0.22, c1:'rgba(120,60,160,0.055)', c2:'rgba(180,80,140,0.02)' },
      { x: c.width*0.25, y: c.height*0.65, r: c.width*0.18, c1:'rgba(60,40,140,0.05)',  c2:'rgba(100,60,160,0.015)' },
      { x: c.width*0.55, y: c.height*0.45, r: c.width*0.28, c1:'rgba(90,30,120,0.04)',  c2:'rgba(140,70,100,0.01)' }
    ];
    nebulae.forEach(n => {
      const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
      g.addColorStop(0, n.c1); g.addColorStop(1, n.c2);
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
      ctx.fillStyle = g; ctx.fill();
    });

    // Regular stars
    stars.forEach(s => {
      const a = 0.2 + 0.7 * Math.sin(s.phase + t * s.speed);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.color},${a})`;
      ctx.fill();
    });

    // Sparkle stars
    sparkles.forEach(s => {
      const a = 0.15 + 0.75 * Math.abs(Math.sin(s.phase + t * s.speed));
      drawSparkle(ctx, s.x, s.y, s.size, a);
    });

    // Shooting stars
    for (let i = shooters.length - 1; i >= 0; i--) {
      const s = shooters[i];
      s.progress += s.speed;
      const px = s.x + Math.cos(s.angle) * s.progress;
      const py = s.y + Math.sin(s.angle) * s.progress;
      const tailX = px - Math.cos(s.angle) * s.len;
      const tailY = py - Math.sin(s.angle) * s.len;
      s.alpha = Math.max(0, 1 - s.progress / (s.len * 2.5));
      if (s.alpha <= 0 || px > c.width + 50 || py > c.height + 50) {
        shooters.splice(i, 1); continue;
      }
      const grad = ctx.createLinearGradient(tailX, tailY, px, py);
      grad.addColorStop(0, `rgba(255,248,220,0)`);
      grad.addColorStop(0.6, `rgba(255,240,180,${s.alpha * 0.5})`);
      grad.addColorStop(1, `rgba(255,255,240,${s.alpha})`);
      ctx.beginPath();
      ctx.moveTo(tailX, tailY); ctx.lineTo(px, py);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.4; ctx.stroke();
      // Head glow
      ctx.beginPath(); ctx.arc(px, py, 1.5, 0, Math.PI*2);
      ctx.fillStyle = `rgba(255,255,220,${s.alpha})`; ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
})();

// ─── Floating petals ─────────────────────────────────────
(function() {
  const colors = ['#f9a8d4','#e879f9','#c084fc','#fda4af','#fbbf24','#f0abfc'];
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.cssText = `
      left: ${Math.random()*100}%;
      width: ${5 + Math.random()*7}px;
      height: ${5 + Math.random()*7}px;
      background: ${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration: ${9 + Math.random()*12}s;
      animation-delay: ${Math.random()*14}s;
      top: -20px;
    `;
    document.body.appendChild(p);
  }
})();

// ─── Confetti (birthday only) ─────────────────────────────
function startConfetti() {
  const c = document.getElementById('confetti');
  c.style.display = 'block';
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  const ctx = c.getContext('2d');
  const pieces = Array.from({length: 120}, () => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height - c.height,
    w: 6 + Math.random() * 7,
    h: 3 + Math.random() * 4,
    color: ['#f9a8d4','#e879f9','#fbbf24','#c084fc','#f0abfc','#d4af7a'][Math.floor(Math.random()*6)],
    rot: Math.random() * Math.PI * 2,
    vx: -1 + Math.random() * 2,
    vy: 1.5 + Math.random() * 2.5,
    vr: (Math.random() - 0.5) * 0.1
  }));
  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, c.width, c.height);
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      if (p.y > c.height) { p.y = -10; p.x = Math.random() * c.width; }
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.85;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 500) requestAnimationFrame(animate);
    else { ctx.clearRect(0,0,c.width,c.height); c.style.display='none'; }
  }
  animate();
}

// ─── Init ────────────────────────────────────────────────
revealMessage();




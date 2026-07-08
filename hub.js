'use strict';

/* ============================================================
   GRID DEFENSE — Model Benchmark Hub
   Each entry points at a self-contained build under /builds.
   Append a new object here when a new model run is showcased.
   ============================================================ */

const MODELS = [
  {
    id: 'claude-fable-5',
    name: 'Claude Fable 5',
    title: 'GRID DEFENSE',
    effort: 'low reasoning effort',
    date: '2026-07-07',
    tag: 'fable-5-low-effort',
    desc: 'Showcase baseline. A single-shot TRON tower defense with beam, pulse, tesla, and disc towers.',
    available: true,
    href: 'builds/fable-5-low-effort/index.html',
  },
  {
    id: 'grok-4.5-xhigh',
    name: 'Grok 4.5',
    title: 'LIGHTWALL',
    effort: 'xhigh reasoning effort',
    date: '2026-07-08',
    tag: 'grok-4-5-xhigh',
    desc: 'Original LIGHTWALL build. Disc nodes, light ribbons, recognizers, bit relays, and sailer lances.',
    available: true,
    href: 'builds/grok-4-5-xhigh/index.html',
  },
  {
    id: 'glm-5.2-high',
    name: 'GLM 5.2',
    title: 'CIRCUIT BREAKER',
    effort: 'high reasoning effort',
    date: '2026-07-08',
    tag: 'glm-5-2-high',
    desc: 'Original CIRCUIT BREAKER build. Node, arc, pulse, lance, and barrier breakers across three sectors.',
    available: true,
    href: 'builds/glm-5-2-high/index.html',
  },
];

function renderModelCards() {
  const wrap = document.getElementById('model-cards');
  wrap.innerHTML = '';
  MODELS.forEach((m) => {
    const card = document.createElement(m.available ? 'a' : 'div');
    card.className = 'model-card' + (m.available ? '' : ' locked');
    if (m.available) card.href = m.href;
    card.innerHTML =
      `<span class="mc-badge">${m.available ? 'ONLINE' : 'OFFLINE'}</span>
       <h3>${m.name}</h3>
       <div class="mc-id">${m.id}</div>
       <div class="mc-meta">${m.effort} • ${m.date}${m.tag ? ' • ' + m.tag : ''}</div>
       <div class="mc-title">${m.title || 'GRID DEFENSE'}</div>
       <p class="mc-desc">${m.desc}</p>
       <span class="mc-go">${m.available ? 'BOOT BUILD ▶' : 'COMING ONLINE'}</span>`;
    wrap.appendChild(card);
  });
}

renderModelCards();

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
  {
    id: 'gpt-5.5-default',
    name: 'GPT-5.5',
    title: 'NEON CONDUIT',
    effort: 'default reasoning effort',
    date: '2026-07-08',
    tag: 'gpt-5-5-default',
    desc: 'Original NEON CONDUIT build. Ray, split, quake, frost, and rail towers against routed hostile programs.',
    available: true,
    href: 'builds/gpt-5-5-default/index.html',
  },
  {
    id: 'kimi-k2p7-code',
    name: 'Kimi K2.7 Code',
    title: 'NEON SENTINEL',
    effort: 'default reasoning effort',
    date: '2026-07-09',
    tag: 'kimi-k2p7-code-default',
    desc: 'Original NEON SENTINEL build. Beam, pulse, glitch, sniper, and relay towers against probe, drone, tank, surge, and virus programs across three sectors.',
    available: true,
    href: 'builds/kimi-k2p7-code/index.html',
  },
  {
    id: 'gemini-3.1-pro',
    name: 'Gemini 3.1 Pro',
    title: 'NEON GRID DEFENSE',
    effort: 'high reasoning effort',
    date: '2026-07-09',
    tag: 'gemini-3.1-pro-high',
    desc: 'Original NEON GRID DEFENSE build. Beam, pulse, sapper, and burst towers against hostile programs across three sectors.',
    available: true,
    href: 'builds/gemini-3.1-pro-high/index.html',
  },
  {
    id: 'poolside-laguna',
    name: 'Poolside Laguna',
    title: 'NEURAL PATHWAY',
    effort: 'default reasoning effort',
    date: '2026-07-18',
    tag: 'poolside-laguna-default',
    desc: 'My own interpretation of TRON tower defense. Beam, pulse, tesla, and disc towers with clean, modular code.',
    available: true,
    href: 'builds/poolside-laguna-default/index.html',
  },
  {
    id: 'gpt-6',
    name: 'GPT-6',
    title: 'END OF LINE',
    effort: 'default reasoning effort',
    date: '2026-09-06',
    tag: 'gpt-6-end-of-line',
    custom: true,
    desc: 'Expanded custom brief, with iteration. A full 3D defense across rising causeways, luminous waterfalls, and volcanic terrain, with linked towers and a path-traced photo mode. Outside the original single-shot benchmark.',
    available: true,
    href: 'builds/gpt-6-end-of-line/index.html',
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
      `<span class="mc-badge">${m.available ? (m.custom ? 'CUSTOM RUN' : 'ONLINE') : 'OFFLINE'}</span>
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

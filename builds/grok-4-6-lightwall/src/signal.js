import { TOWERS, WALL_COST, SECTORS, upgradeCost } from './sectors.js';

const $ = id => document.getElementById(id);

export function createSignal() {
  let toastT, bannerT;
  const dock = $('tower-dock');
  const keys = ['disc', 'ribbon', 'recognizer', 'bit', 'sailer'];
  dock.innerHTML = '';
  keys.forEach((key, i) => {
    const d = TOWERS[key];
    const b = document.createElement('button');
    b.className = 'dock-item';
    b.dataset.tower = key;
    b.innerHTML = `<span class="key">${i + 1}</span><span class="name">${d.name.toUpperCase()}</span><span class="cost">${d.cost}</span>`;
    dock.appendChild(b);
  });
  const wallBtn = document.createElement('button');
  wallBtn.className = 'dock-item';
  wallBtn.dataset.tower = 'wall';
  wallBtn.innerHTML = `<span class="key">6</span><span class="name">LIGHT-WALL</span><span class="cost">${WALL_COST}</span>`;
  dock.appendChild(wallBtn);

  function show(id) {
    document.querySelectorAll('.overlay').forEach(s => {
      s.classList.remove('active');
      if (s.id !== 'settings') s.hidden = s.id !== id;
    });
    const el = $(id);
    if (el) {
      el.hidden = false;
      el.classList.add('active');
    }
    $('hud').hidden = id !== 'hud';
    if (id === 'hud') $('hud').hidden = false;
  }

  function toast(msg) {
    $('toast').textContent = msg;
    $('toast').classList.add('on');
    clearTimeout(toastT);
    toastT = setTimeout(() => $('toast').classList.remove('on'), 2800);
  }
  function banner(title, sub = '') {
    $('banner').innerHTML = `<strong>${title}</strong>${sub ? `<div>${sub}</div>` : ''}`;
    $('banner').classList.add('on');
    clearTimeout(bannerT);
    bannerT = setTimeout(() => $('banner').classList.remove('on'), 2800);
  }

  function hud(p) {
    const s = SECTORS[p.sectorIndex];
    $('hud-sector').textContent = s.name.toUpperCase();
    $('hud-wave').textContent = `${String(Math.min(p.wave, p.totalWaves)).padStart(2, '0')} / ${String(p.totalWaves).padStart(2, '0')}`;
    $('hud-energy').textContent = Math.floor(p.energy);
    $('hud-core').textContent = p.core;
    $('hud-kills').textContent = p.kills;
    $('btn-wave').disabled = p.state === 'wave' && (p.units.length || p._spawnQ.length);
    $('cd-throw').textContent = p.cooldowns.throw > 0 ? `${p.cooldowns.throw.toFixed(0)}s` : 'READY';
    $('cd-overclock').textContent = p.cooldowns.overclock > 0 ? `${p.cooldowns.overclock.toFixed(0)}s` : 'READY';
    document.querySelectorAll('.dock-item').forEach(btn => {
      const key = btn.dataset.tower;
      const cost = key === 'wall' ? WALL_COST : TOWERS[key].cost;
      btn.classList.toggle('poor', p.energy < cost);
    });
  }

  function preview(types) {
    const counts = {};
    types.forEach(t => { counts[t] = (counts[t] || 0) + 1; });
    $('wave-preview').innerHTML = Object.entries(counts).map(([k, n]) => `<i>${k.toUpperCase()} ×${n}</i>`).join('');
  }

  function sheet(p, tower) {
    if (!tower) {
      $('sheet').hidden = true;
      return;
    }
    const def = TOWERS[tower.type];
    const stats = p.towerStats(tower);
    $('sheet').hidden = false;
    $('sheet-name').textContent = def.name;
    $('sheet-level').textContent = `LEVEL ${tower.level}${tower.branch ? ' · ' + tower.branch.toUpperCase() : ''}`;
    $('sheet-desc').textContent = def.shot === 'disc' ? 'Rapid identity discs.' : def.name;
    $('sheet-stats').innerHTML = `DMG ${stats.damage.toFixed(0)} · RNG ${stats.range.toFixed(1)} · RATE ${(stats.interval ? (1 / stats.interval).toFixed(1) : 'AURA')}`;
    const flags = Object.entries(stats.flags).filter(([, v]) => v).map(([k]) => k);
    $('sheet-flags').textContent = flags.length ? 'LINK ' + flags.join(' · ') : 'No synergy in range';
    const needBranch = tower.level === 1;
    $('btn-branch-a').hidden = !needBranch;
    $('btn-branch-b').hidden = !needBranch;
    $('btn-upgrade').hidden = needBranch || tower.level >= 3;
    $('btn-upgrade').textContent = tower.level >= 3 ? 'MAXED' : `EVOLVE (${upgradeCost(tower.type, tower.level)})`;
    const labels = {
      disc: ['TWIN DISCS', 'RICOCHET'],
      ribbon: ['WIDER BURST', 'ROAD TRAIL'],
      recognizer: ['DUAL BEAM', 'VACUUM'],
      bit: ['AURA CHIP', 'FIRE SHARE'],
      sailer: ['CHARGE', 'WALL-RIDE'],
    };
    $('btn-branch-a').textContent = labels[tower.type][0];
    $('btn-branch-b').textContent = labels[tower.type][1];
  }

  function selectBuild(key) {
    document.querySelectorAll('.dock-item').forEach(b => b.classList.toggle('selected', b.dataset.tower === key));
  }

  function hideLoading() {
    $('loading').classList.add('hide');
    setTimeout(() => { $('loading').hidden = true; }, 700);
  }

  function mission(sectorIndex) {
    const s = SECTORS[sectorIndex];
    $('mission-title').textContent = s.name;
    $('mission-body').textContent = s.briefing;
  }

  return { show, toast, banner, hud, preview, sheet, selectBuild, hideLoading, mission, $ };
}

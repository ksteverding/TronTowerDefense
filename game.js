// Game state and constants
const TILE_SIZE = 40;
const COLS = 20; // 800px width
const ROWS = 15; // 600px height

const STATE_SPLASH = 0;
const STATE_MENU = 1;
const STATE_PLAYING = 2;
const STATE_GAMEOVER = 3;
const STATE_VICTORY = 4;

let currentState = STATE_SPLASH;

// Game data
let credits = 100;
let lives = 20;
let currentWaveIndex = 0;
let levelData = null;
let enemies = [];
let towers = [];
let projectiles = [];
let particles = [];

// Wave state
let waveActive = false;
let waveTimer = 0;
let spawnIndex = 0;

// UI Selection
let selectedTowerType = null;
let mouseX = 0;
let mouseY = 0;
let hoverCol = -1;
let hoverRow = -1;

// Level Definitions
const LEVELS = [
    {
        name: "SECTOR 1: INGRESS",
        startCredits: 150,
        path: [
            {x: 0, y: 3}, {x: 5, y: 3}, {x: 5, y: 10}, 
            {x: 12, y: 10}, {x: 12, y: 5}, {x: 19, y: 5}
        ],
        waves: [
            { count: 10, type: 'basic', interval: 60 },
            { count: 15, type: 'basic', interval: 50 },
            { count: 5, type: 'fast', interval: 40 },
            { count: 10, type: 'tank', interval: 90 },
            { count: 20, type: 'mixed', interval: 45 }
        ]
    },
    {
        name: "SECTOR 2: DATA STREAM",
        startCredits: 200,
        path: [
            {x: 10, y: 0}, {x: 10, y: 4}, {x: 3, y: 4}, 
            {x: 3, y: 12}, {x: 15, y: 12}, {x: 15, y: 8}, {x: 19, y: 8}
        ],
        waves: [
            { count: 15, type: 'fast', interval: 40 },
            { count: 10, type: 'tank', interval: 80 },
            { count: 25, type: 'basic', interval: 35 },
            { count: 15, type: 'mixed', interval: 50 },
            { count: 5, type: 'boss', interval: 120 }
        ]
    },
    {
        name: "SECTOR 3: MAINFRAME",
        startCredits: 300,
        path: [
            {x: 0, y: 14}, {x: 18, y: 14}, {x: 18, y: 1}, 
            {x: 2, y: 1}, {x: 2, y: 10}, {x: 14, y: 10}, 
            {x: 14, y: 5}, {x: 6, y: 5}, {x: 6, y: 7}, {x: 10, y: 7}
        ],
        waves: [
            { count: 20, type: 'mixed', interval: 40 },
            { count: 20, type: 'tank', interval: 70 },
            { count: 30, type: 'fast', interval: 30 },
            { count: 5, type: 'boss', interval: 100 },
            { count: 50, type: 'swarm', interval: 20 }
        ]
    }
];

const ENEMY_TYPES = {
    basic: { hp: 50, speed: 1.5, radius: 12, color: '#f0f', reward: 5 },
    fast: { hp: 30, speed: 3.0, radius: 8, color: '#0ff', reward: 5 },
    tank: { hp: 150, speed: 0.8, radius: 16, color: '#f90', reward: 15 },
    boss: { hp: 500, speed: 0.6, radius: 20, color: '#f00', reward: 50 },
    swarm: { hp: 20, speed: 2.5, radius: 6, color: '#fff', reward: 2 }
};

const TOWER_TYPES = {
    beam: {
        name: 'BEAM NODE',
        cost: 50,
        range: 100,
        damage: 10,
        cooldown: 20, // frames
        color: '#08f',
        desc: 'Standard rapid-fire node.'
    },
    pulse: {
        name: 'PULSE CANNON',
        cost: 120,
        range: 150,
        damage: 40,
        cooldown: 60,
        color: '#f0f',
        desc: 'Slow, high damage shots.'
    },
    sapper: {
        name: 'DATA SAPPER',
        cost: 100,
        range: 120,
        damage: 5,
        cooldown: 10,
        color: '#f90',
        desc: 'Continuous short-range beam.'
    },
    burst: {
        name: 'BURST ARRAY',
        cost: 200,
        range: 80,
        damage: 80,
        cooldown: 90,
        color: '#0f0',
        desc: 'Heavy localized damage.'
    }
};

// DOM Elements
const screens = {
    splash: document.getElementById('splash-screen'),
    menu: document.getElementById('main-menu'),
    game: document.getElementById('game-ui')
};

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const uiCredits = document.getElementById('ui-credits');
const uiLives = document.getElementById('ui-lives');
const uiWave = document.getElementById('ui-wave');
const uiMaxWave = document.getElementById('ui-max-wave');
const towerList = document.querySelector('.tower-list');
const btnStartWave = document.getElementById('btn-start-wave');
const overlay = document.getElementById('game-overlay');
const overlayTitle = document.getElementById('overlay-title');
const overlayDesc = document.getElementById('overlay-desc');
const btnOverlayAction = document.getElementById('btn-overlay-action');

// Init
function init() {
    // Event Listeners
    document.getElementById('btn-enter').addEventListener('click', () => switchState(STATE_MENU));
    
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const levelIdx = parseInt(e.target.dataset.level) - 1;
            startLevel(levelIdx);
        });
    });

    document.getElementById('btn-quit').addEventListener('click', () => switchState(STATE_MENU));
    
    btnStartWave.addEventListener('click', () => {
        if (!waveActive && currentWaveIndex < levelData.waves.length) {
            waveActive = true;
            waveTimer = 0;
            spawnIndex = 0;
            btnStartWave.disabled = true;
            btnStartWave.classList.add('disabled');
        }
    });

    btnOverlayAction.addEventListener('click', () => switchState(STATE_MENU));

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        hoverCol = Math.floor(mouseX / TILE_SIZE);
        hoverRow = Math.floor(mouseY / TILE_SIZE);
    });

    canvas.addEventListener('mouseleave', () => {
        hoverCol = -1;
        hoverRow = -1;
    });

    canvas.addEventListener('click', () => {
        if (selectedTowerType && hoverCol >= 0 && hoverRow >= 0 && currentState === STATE_PLAYING) {
            tryPlaceTower(hoverCol, hoverRow, selectedTowerType);
        }
    });

    buildTowerMenu();
    requestAnimationFrame(gameLoop);
}

function switchState(newState) {
    currentState = newState;
    Object.values(screens).forEach(s => s.classList.remove('visible'));
    overlay.classList.add('hidden');
    
    if (newState === STATE_SPLASH) screens.splash.classList.add('visible');
    else if (newState === STATE_MENU) screens.menu.classList.add('visible');
    else if (newState === STATE_PLAYING) screens.game.classList.add('visible');
    else if (newState === STATE_GAMEOVER) {
        screens.game.classList.add('visible');
        overlay.classList.remove('hidden');
        overlayTitle.textContent = "SYSTEM FAILURE";
        overlayTitle.className = "neon-text pink";
        overlayDesc.textContent = "CORE INTEGRITY COMPROMISED.";
        btnOverlayAction.textContent = "RETURN TO HUB";
    }
    else if (newState === STATE_VICTORY) {
        screens.game.classList.add('visible');
        overlay.classList.remove('hidden');
        overlayTitle.textContent = "SECTOR SECURED";
        overlayTitle.className = "neon-text cyan";
        overlayDesc.textContent = "HOSTILE PROGRAMS PURGED.";
        btnOverlayAction.textContent = "RETURN TO HUB";
    }
}

function buildTowerMenu() {
    towerList.innerHTML = '';
    for (const [key, t] of Object.entries(TOWER_TYPES)) {
        const div = document.createElement('div');
        div.className = 'tower-card';
        div.dataset.type = key;
        div.innerHTML = `
            <div class="tower-header">
                <span style="color: ${t.color}">${t.name}</span>
                <span class="tower-cost">${t.cost} BITS</span>
            </div>
            <div class="tower-desc">${t.desc}</div>
        `;
        div.addEventListener('click', () => {
            if (credits >= t.cost) {
                document.querySelectorAll('.tower-card').forEach(c => c.classList.remove('selected'));
                div.classList.add('selected');
                selectedTowerType = key;
            }
        });
        towerList.appendChild(div);
    }
}

function updateTowerMenu() {
    document.querySelectorAll('.tower-card').forEach(card => {
        const type = card.dataset.type;
        const cost = TOWER_TYPES[type].cost;
        if (credits < cost) {
            card.classList.add('disabled');
            if (selectedTowerType === type) {
                card.classList.remove('selected');
                selectedTowerType = null;
            }
        } else {
            card.classList.remove('disabled');
        }
    });
}

function startLevel(idx) {
    levelData = LEVELS[idx];
    credits = levelData.startCredits;
    lives = 20;
    currentWaveIndex = 0;
    enemies = [];
    towers = [];
    projectiles = [];
    particles = [];
    waveActive = false;
    selectedTowerType = null;
    
    uiMaxWave.textContent = levelData.waves.length;
    btnStartWave.disabled = false;
    btnStartWave.classList.remove('disabled');
    
    document.querySelectorAll('.tower-card').forEach(c => c.classList.remove('selected'));
    
    updateUI();
    switchState(STATE_PLAYING);
}

function updateUI() {
    uiCredits.textContent = credits;
    uiLives.textContent = lives;
    uiWave.textContent = Math.min(currentWaveIndex + 1, levelData.waves.length);
    updateTowerMenu();
}

function tryPlaceTower(col, row, typeKey) {
    const cost = TOWER_TYPES[typeKey].cost;
    if (credits < cost) return;

    // Check if on path
    if (isOnPath(col, row)) return;

    // Check if tower already exists
    if (towers.some(t => t.col === col && t.row === row)) return;

    towers.push({
        col, row,
        x: col * TILE_SIZE + TILE_SIZE / 2,
        y: row * TILE_SIZE + TILE_SIZE / 2,
        type: TOWER_TYPES[typeKey],
        cooldown: 0,
        target: null
    });

    credits -= cost;
    updateUI();
    createParticles(col * TILE_SIZE + TILE_SIZE/2, row * TILE_SIZE + TILE_SIZE/2, TOWER_TYPES[typeKey].color, 10);
}

function isOnPath(col, row) {
    const path = levelData.path;
    for (let i = 0; i < path.length - 1; i++) {
        const p1 = path[i];
        const p2 = path[i+1];
        
        const minX = Math.min(p1.x, p2.x);
        const maxX = Math.max(p1.x, p2.x);
        const minY = Math.min(p1.y, p2.y);
        const maxY = Math.max(p1.y, p2.y);
        
        if (col >= minX && col <= maxX && row >= minY && row <= maxY) {
            return true;
        }
    }
    return false;
}

function getPathSegments() {
    const segs = [];
    for (let i = 0; i < levelData.path.length - 1; i++) {
        segs.push({
            p1: {x: levelData.path[i].x * TILE_SIZE + TILE_SIZE/2, y: levelData.path[i].y * TILE_SIZE + TILE_SIZE/2},
            p2: {x: levelData.path[i+1].x * TILE_SIZE + TILE_SIZE/2, y: levelData.path[i+1].y * TILE_SIZE + TILE_SIZE/2}
        });
    }
    return segs;
}

function spawnEnemy(typeKey) {
    const template = ENEMY_TYPES[typeKey];
    if (!template) return;
    
    const startNode = levelData.path[0];
    enemies.push({
        x: startNode.x * TILE_SIZE + TILE_SIZE/2,
        y: startNode.y * TILE_SIZE + TILE_SIZE/2,
        hp: template.hp,
        maxHp: template.hp,
        speed: template.speed,
        radius: template.radius,
        color: template.color,
        reward: template.reward,
        pathIndex: 0
    });
}

function createParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
        particles.push({
            x, y,
            vx: (Math.random() - 0.5) * 5,
            vy: (Math.random() - 0.5) * 5,
            life: 1.0,
            color
        });
    }
}

// Update loops
function gameLoop() {
    if (currentState === STATE_PLAYING) {
        update();
        draw();
    }
    requestAnimationFrame(gameLoop);
}

function update() {
    // Wave logic
    if (waveActive) {
        const wave = levelData.waves[currentWaveIndex];
        waveTimer++;
        if (waveTimer >= wave.interval) {
            waveTimer = 0;
            if (spawnIndex < wave.count) {
                let eType = wave.type;
                if (eType === 'mixed') {
                    const r = Math.random();
                    eType = r < 0.5 ? 'basic' : (r < 0.8 ? 'fast' : 'tank');
                }
                spawnEnemy(eType);
                spawnIndex++;
            }
        }
        
        if (spawnIndex >= wave.count && enemies.length === 0) {
            waveActive = false;
            currentWaveIndex++;
            credits += 50; // wave clear bonus
            updateUI();
            
            if (currentWaveIndex >= levelData.waves.length) {
                switchState(STATE_VICTORY);
            } else {
                btnStartWave.disabled = false;
                btnStartWave.classList.remove('disabled');
            }
        }
    }

    // Enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
        const e = enemies[i];
        const targetNode = levelData.path[e.pathIndex + 1];
        
        if (targetNode) {
            const tx = targetNode.x * TILE_SIZE + TILE_SIZE/2;
            const ty = targetNode.y * TILE_SIZE + TILE_SIZE/2;
            const dx = tx - e.x;
            const dy = ty - e.y;
            const dist = Math.hypot(dx, dy);
            
            if (dist < e.speed) {
                e.x = tx;
                e.y = ty;
                e.pathIndex++;
            } else {
                e.x += (dx / dist) * e.speed;
                e.y += (dy / dist) * e.speed;
            }
        } else {
            // Reached end
            lives--;
            updateUI();
            enemies.splice(i, 1);
            if (lives <= 0) {
                switchState(STATE_GAMEOVER);
            }
            continue;
        }
        
        if (e.hp <= 0) {
            credits += e.reward;
            updateUI();
            createParticles(e.x, e.y, e.color, 15);
            enemies.splice(i, 1);
        }
    }

    // Towers
    towers.forEach(t => {
        if (t.cooldown > 0) t.cooldown--;
        
        // Find target
        let bestTarget = null;
        let bestDist = t.type.range;
        
        enemies.forEach(e => {
            const dist = Math.hypot(e.x - t.x, e.y - t.y);
            if (dist <= bestDist) {
                bestDist = dist;
                bestTarget = e;
            }
        });
        
        t.target = bestTarget;
        
        if (bestTarget && t.cooldown === 0) {
            if (t.type.name === 'DATA SAPPER') {
                // Continuous beam damage
                bestTarget.hp -= t.type.damage;
                t.cooldown = t.type.cooldown;
                projectiles.push({
                    type: 'beam',
                    x1: t.x, y1: t.y,
                    x2: bestTarget.x, y2: bestTarget.y,
                    color: t.type.color,
                    life: 5
                });
            } else {
                // Shoot projectile
                projectiles.push({
                    type: 'bullet',
                    x: t.x, y: t.y,
                    tx: bestTarget.x, ty: bestTarget.y,
                    target: bestTarget,
                    speed: 8,
                    damage: t.type.damage,
                    color: t.type.color,
                    isAOE: t.type.name === 'BURST ARRAY'
                });
                t.cooldown = t.type.cooldown;
            }
        }
    });

    // Projectiles
    for (let i = projectiles.length - 1; i >= 0; i--) {
        const p = projectiles[i];
        if (p.type === 'beam') {
            p.life--;
            if (p.life <= 0) projectiles.splice(i, 1);
        } else {
            const dx = p.tx - p.x;
            const dy = p.ty - p.y;
            const dist = Math.hypot(dx, dy);
            
            if (dist < p.speed) {
                // Hit
                if (p.isAOE) {
                    createParticles(p.tx, p.ty, p.color, 20);
                    enemies.forEach(e => {
                        if (Math.hypot(e.x - p.tx, e.y - p.ty) < 60) {
                            e.hp -= p.damage;
                        }
                    });
                } else if (p.target && enemies.includes(p.target)) {
                    p.target.hp -= p.damage;
                    createParticles(p.tx, p.ty, p.color, 5);
                }
                projectiles.splice(i, 1);
            } else {
                p.x += (dx / dist) * p.speed;
                p.y += (dy / dist) * p.speed;
                // Update target pos if tracking
                if (p.target && enemies.includes(p.target)) {
                    p.tx = p.target.x;
                    p.ty = p.target.y;
                }
            }
        }
    }

    // Particles
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.05;
        if (p.life <= 0) particles.splice(i, 1);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Grid
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += TILE_SIZE) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += TILE_SIZE) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    // Draw Path
    if (levelData) {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
        ctx.lineWidth = TILE_SIZE;
        ctx.lineCap = 'square';
        ctx.lineJoin = 'miter';
        ctx.beginPath();
        const path = levelData.path;
        ctx.moveTo(path[0].x * TILE_SIZE + TILE_SIZE/2, path[0].y * TILE_SIZE + TILE_SIZE/2);
        for (let i = 1; i < path.length; i++) {
            ctx.lineTo(path[i].x * TILE_SIZE + TILE_SIZE/2, path[i].y * TILE_SIZE + TILE_SIZE/2);
        }
        ctx.stroke();

        // Inner bright line
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.lineWidth = 4;
        ctx.shadowColor = '#0ff';
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;
    }

    // Draw Placement Hover
    if (hoverCol >= 0 && hoverRow >= 0 && selectedTowerType) {
        const onPath = isOnPath(hoverCol, hoverRow);
        const hasTower = towers.some(t => t.col === hoverCol && t.row === hoverRow);
        const canPlace = !onPath && !hasTower;
        
        ctx.fillStyle = canPlace ? 'rgba(0, 255, 255, 0.3)' : 'rgba(255, 0, 0, 0.3)';
        ctx.fillRect(hoverCol * TILE_SIZE, hoverRow * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        
        if (canPlace) {
            ctx.beginPath();
            ctx.arc(hoverCol * TILE_SIZE + TILE_SIZE/2, hoverRow * TILE_SIZE + TILE_SIZE/2, TOWER_TYPES[selectedTowerType].range, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.stroke();
        }
    }

    // Draw Towers
    towers.forEach(t => {
        ctx.fillStyle = '#111';
        ctx.strokeStyle = t.type.color;
        ctx.lineWidth = 2;
        ctx.shadowColor = t.type.color;
        ctx.shadowBlur = 10;
        
        // Base
        ctx.fillRect(t.x - 12, t.y - 12, 24, 24);
        ctx.strokeRect(t.x - 12, t.y - 12, 24, 24);
        
        // Core
        ctx.fillStyle = t.cooldown === 0 ? t.type.color : '#333';
        ctx.beginPath();
        ctx.arc(t.x, t.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Directional indicator
        if (t.target) {
            ctx.strokeStyle = t.type.color;
            ctx.beginPath();
            ctx.moveTo(t.x, t.y);
            const angle = Math.atan2(t.target.y - t.y, t.target.x - t.x);
            ctx.lineTo(t.x + Math.cos(angle) * 14, t.y + Math.sin(angle) * 14);
            ctx.stroke();
        }
    });

    // Draw Enemies
    enemies.forEach(e => {
        ctx.fillStyle = '#000';
        ctx.strokeStyle = e.color;
        ctx.lineWidth = 2;
        ctx.shadowColor = e.color;
        ctx.shadowBlur = 8;
        
        ctx.beginPath();
        if (e.radius > 12) {
            // Hexagon for tank/boss
            for(let i=0; i<6; i++) {
                const angle = i * Math.PI / 3;
                if(i===0) ctx.moveTo(e.x + e.radius * Math.cos(angle), e.y + e.radius * Math.sin(angle));
                else ctx.lineTo(e.x + e.radius * Math.cos(angle), e.y + e.radius * Math.sin(angle));
            }
        } else {
            // Diamond for basic/fast
            ctx.moveTo(e.x, e.y - e.radius);
            ctx.lineTo(e.x + e.radius, e.y);
            ctx.lineTo(e.x, e.y + e.radius);
            ctx.lineTo(e.x - e.radius, e.y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;
        
        // HP Bar
        const hpPercent = e.hp / e.maxHp;
        ctx.fillStyle = '#333';
        ctx.fillRect(e.x - 10, e.y - e.radius - 8, 20, 3);
        ctx.fillStyle = e.color;
        ctx.fillRect(e.x - 10, e.y - e.radius - 8, 20 * hpPercent, 3);
    });

    // Draw Projectiles
    projectiles.forEach(p => {
        if (p.type === 'beam') {
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 3;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.moveTo(p.x1, p.y1);
            ctx.lineTo(p.x2, p.y2);
            ctx.stroke();
            ctx.shadowBlur = 0;
        } else {
            ctx.fillStyle = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.isAOE ? 6 : 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    });

    // Draw Particles
    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.fillRect(p.x, p.y, 2, 2);
    });
    ctx.globalAlpha = 1.0;
}

// Start
init();
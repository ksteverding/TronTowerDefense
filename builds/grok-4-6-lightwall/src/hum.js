export function createHum() {
  let ctx = null;
  let muted = false;
  function ac() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function beep(freq, dur, type = 'square', gain = 0.04) {
    if (muted) return;
    const a = ac();
    const o = a.createOscillator();
    const g = a.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.value = gain;
    g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + dur);
    o.connect(g).connect(a.destination);
    o.start();
    o.stop(a.currentTime + dur);
  }
  return {
    get muted() { return muted; },
    toggle() { muted = !muted; return muted; },
    play(name) {
      if (name === 'build') beep(420, 0.12, 'square', 0.05);
      else if (name === 'wall') beep(180, 0.22, 'sawtooth', 0.06);
      else if (name === 'shot') beep(880, 0.05, 'square', 0.03);
      else if (name === 'rail') beep(240, 0.16, 'sawtooth', 0.05);
      else if (name === 'kill') beep(140, 0.18, 'triangle', 0.05);
      else if (name === 'leak') beep(90, 0.35, 'sawtooth', 0.07);
      else if (name === 'wave') beep(330, 0.2, 'square', 0.05);
      else if (name === 'throw') beep(520, 0.25, 'square', 0.06);
      else if (name === 'win') { beep(440, 0.2); setTimeout(() => beep(660, 0.3), 120); }
    },
  };
}

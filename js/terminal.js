/* ══════════════════════════════════════
   TERMINAL — typewriter animation
══════════════════════════════════════ */
const lines = [
  { t: 'SELECT *', c: 't-w' },
  { t: 'FROM Developer d', c: '' },
  { t: 'WHERE d.name = \'Sharan\'', c: ''},
  { t: '// The engineer behind this portfolio', c: 't-cm' },
  { t: '+----+--------+------------------+----------+----------+', c: 't-g' },
  { t: "| id | name   | role             | status   | location |", c: 't-g' },
  { t: "+----+--------+------------------+----------+----------+",      c: 't-g' },
  { t: "| 1  | Sharan | Software Engineer| Available| Germany  |",      c: 't-g' },
  { t: "+----+--------+------------------+----------+----------+",      c: 't-g' },
  { t: " ",    c: 't-g' },
  { t: 'SELECT s.skill, s.proficiency', c: 't-w' },
  { t: 'FROM Skills s', c: '' },
  { t: 'ORDER BY s.proficiency DESC;', c: 't-w' },
  { t: "+----------------+--------------+", c: 't-s' },
  { t: "| skill          | proficiency  |", c: 't-s' },
  { t: "+----------------+--------------+", c: 't-s' },
  { t: '| SQL            | Expert       |', c: 't-v' },
  { t: '| ASP.NET Core   | Advanced     |', c: 't-v' },
  { t: '| Azure          | Intermediate |', c: 't-v' },
  { t: '| React          | Beginner     |', c: 't-v' },
  { t: '+----------------+--------------+', c: 't-v' },
];

const COLORS = {
  't-cm': '#4A4A3E',
  't-v':  '#A5A5F5',   /* indigo light */
  't-s':  '#C4B08A',
  't-ac': '#7C7CEA',   /* indigo medium */
  't-w':  '#E8E6DF',
  't-g':  '#8892A0',
};

const el = document.getElementById('terminal-output');
let li = 0, ci = 0, rendered = [];

function renderTerm() {
  let h = rendered.map(l => `<div style="color:${COLORS[l.c]||'#E8E6DF'};white-space:pre">${l.t}</div>`).join('');
  if (li < lines.length) {
    const cur = lines[li];
    const col = COLORS[cur.c] || '#E8E6DF';
    h += `<div style="color:${col};white-space:pre">${cur.t.slice(0,ci)}<span class="cursor"></span></div>`;
  }
  el.innerHTML = h;
}

function type() {
  if (li >= lines.length) return;
  const cur = lines[li];
  if (ci < cur.t.length) {
    ci++; renderTerm();
    setTimeout(type, 28 + Math.random() * 18);
  } else {
    rendered.push(cur); li++; ci = 0; renderTerm();
    setTimeout(type, cur.t === '' ? 50 : 85);
  }
}

setTimeout(type, 700);

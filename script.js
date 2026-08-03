const screens = document.querySelectorAll('.screen');

function showScreen(id) {
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

document.getElementById('btn-guest').addEventListener('click', () => {
  showScreen('screen-lobby');
});

document.getElementById('btn-start-game').addEventListener('click', () => {
  showScreen('screen-table');
  dealDemoCards();
  showCenterCards();
});

document.getElementById('btn-exit-table').addEventListener('click', () => {
  showScreen('screen-lobby');
});

document.getElementById('btn-simorgh-power').addEventListener('click', () => {
  alert('قدرت سیمرغ در این نسخه دمو غیرفعال است. به‌زودی فعال می‌شود! 🦅');
});

const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['A', 'K', 'Q', 'J', '۱۰', '۹'];

function dealDemoCards() {
  const handEl = document.getElementById('hand-cards');
  handEl.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const card = document.createElement('div');
    card.className = 'hand-card';
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    card.textContent = rank + suit;
    card.style.color = (suit === '♥' || suit === '♦') ? '#b02a2a' : '#111';
    card.addEventListener('click', () => playCard(card));
    handEl.appendChild(card);
  }
}

function showCenterCards() {
  const center = document.getElementById('table-center');
  center.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    const back = document.createElement('div');
    back.className = 'card-back';
    center.appendChild(back);
  }
}

function playCard(cardEl) {
  cardEl.style.opacity = '0.3';
  cardEl.style.pointerEvents = 'none';
  updateScore();
}

let scoreUs = 0, scoreThem = 0;
function updateScore() {
  if (Math.random() > 0.5) {
    scoreUs++;
    document.getElementById('score-us').textContent = scoreUs;
  } else {
    scoreThem++;
    document.getElementById('score-them').textContent = scoreThem;
  }
}

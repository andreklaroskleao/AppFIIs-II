import { getFiisData, createStatCard, formatCurrency } from './utils.js';

async function loadHome() {
  const fiis = await getFiisData();

  const statsContainer = document.getElementById('home-stats');
  const highlightsContainer = document.getElementById('highlights');

  const avgDy = (fiis.reduce((acc, item) => acc + item.dy, 0) / fiis.length).toFixed(2);
  const totalSegments = new Set(fiis.map((item) => item.segment)).size;
  const avgPrice = fiis.reduce((acc, item) => acc + item.price, 0) / fiis.length;

  if (statsContainer) {
    statsContainer.innerHTML = [
      createStatCard('FIIs cadastrados', fiis.length),
      createStatCard('Segmentos', totalSegments),
      createStatCard('DY médio', `${avgDy}%`),
      createStatCard('Preço médio', formatCurrency(avgPrice))
    ].join('');
  }

  if (highlightsContainer) {
    highlightsContainer.innerHTML = fiis.slice(0, 6).map((fii) => `
      <article class="card">
        <h3>${fii.ticker}</h3>
        <p>${fii.name}</p>
        <p>Segmento: ${fii.segment}</p>
        <p>DY: ${fii.dy}%</p>
        <p>P/VP: ${fii.pvp}</p>
        <p>Preço: ${formatCurrency(fii.price)}</p>
      </article>
    `).join('');
  }
}

loadHome().catch(console.error);

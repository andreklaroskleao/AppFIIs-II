export async function getFiisData() {
  const response = await fetch('./data/fiis.json');
  if (!response.ok) {
    throw new Error('Não foi possível carregar a base de FIIs.');
  }
  return response.json();
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(value || 0));
}

export function formatDate(dateString) {
  if (!dateString) return '-';
  return new Intl.DateTimeFormat('pt-BR').format(new Date(dateString));
}

export function createStatCard(label, value) {
  return `
    <article class="stat-card">
      <div class="label">${label}</div>
      <div class="value">${value}</div>
    </article>
  `;
}

export function showMessage(element, text, type = 'success') {
  if (!element) return;
  element.className = `message ${type}`;
  element.textContent = text;
  element.classList.remove('hidden');
}

export function hideElement(element) {
  if (!element) return;
  element.classList.add('hidden');
}

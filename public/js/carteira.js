import { auth, db } from './firebase-config.js';

  if (!portfolio.length) {
    portfolioList.innerHTML = '<article class="card"><p>Nenhuma posição cadastrada ainda.</p></article>';
    return;
  }

  portfolioList.innerHTML = portfolio.map((item) => {
    const fii = getFiiInfo(item.ticker);
    const estimatedIncome = (Number(item.quantity) * Number(fii?.lastDividend || 0));
    const invested = Number(item.quantity) * Number(item.avgPrice);

    return `
      <article class="card">
        <h3>${item.ticker}</h3>
        <p>Quantidade: ${item.quantity}</p>
        <p>Preço médio: ${formatCurrency(item.avgPrice)}</p>
        <p>Total investido: ${formatCurrency(invested)}</p>
        <p>Renda mensal estimada: ${formatCurrency(estimatedIncome)}</p>
        <button class="btn delete-btn" data-id="${item.id}">Excluir</button>
      </article>
    `;
  }).join('');

  document.querySelectorAll('.delete-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      if (!currentUser) return;
      await deleteDoc(doc(db, `users/${currentUser.uid}/portfolio`, button.dataset.id));
      await loadPortfolio();
    });
  });
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!currentUser) {
    alert('Faça login para salvar sua carteira.');
    return;
  }

  const ticker = document.getElementById('ticker').value.trim().toUpperCase();
  const quantity = Number(document.getElementById('quantity').value);
  const avgPrice = Number(document.getElementById('avgPrice').value);

  await addDoc(collection(db, `users/${currentUser.uid}/portfolio`), {
    ticker,
    quantity,
    avgPrice,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });

  form.reset();
  await loadPortfolio();
});

async function init() {
  fiisData = await getFiisData();
  renderPortfolio();
}

onAuthStateChanged(auth, async (user) => {
  currentUser = user;

  if (user) {
    authWarning?.classList.add('hidden');
    await loadPortfolio();
  } else {
    authWarning?.classList.remove('hidden');
    portfolio = [];
    renderPortfolio();
  }
});

init().catch(console.error);

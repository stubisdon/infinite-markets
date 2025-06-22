function showRandomCard() {
    if (!Array.isArray(marketCards) || marketCards.length === 0) return;
    const card = marketCards[Math.floor(Math.random() * marketCards.length)];
    const container = document.getElementById('card');
    container.innerHTML = `
        <h1>${card["Market"]}</h1>
        <p><strong>Why Infinite?</strong> ${card["Why Infinite?"]}</p>
        <p><strong>Examples:</strong> ${card["Examples"]}</p>
        <p><strong>Notables:</strong> ${card["Notables"]}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    showRandomCard();
    const btn = document.getElementById('shuffleButton');
    if (btn) {
        btn.addEventListener('click', showRandomCard);
    }
});

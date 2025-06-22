function showRandomCard() {
    if (!Array.isArray(marketCards) || marketCards.length === 0) return;
    const card = marketCards[Math.floor(Math.random() * marketCards.length)];
    const container = document.getElementById('card');
    container.innerHTML = `
        <div class="card-body">
            <h1>${card["Market"]}</h1>
            <p><strong>Why Infinite?</strong> ${card["Why Infinite?"]}</p>
            <p><strong>Examples:</strong> ${card["Examples"]}</p>
            <p><strong>Notables:</strong> ${card["Notables"]}</p>
        </div>
        <button id="shuffleButton" class="shuffle-btn" aria-label="Shuffle">
            <img src="shuffle.svg" alt="Shuffle" width="32" height="32" />
        </button>
    `;
    const btn = document.getElementById('shuffleButton');
    if (btn) {
        btn.addEventListener('click', () => {
            if (typeof umami === 'function') {
                umami.track('shuffle');
            }
            showRandomCard();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showRandomCard();
    const shareBtn = document.getElementById('shareButton');
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const url = window.location.href;
            try {
                if (navigator.share) {
                    await navigator.share({ title: document.title, url });
                } else if (navigator.clipboard) {
                    await navigator.clipboard.writeText(url);
                    alert('Link copied to clipboard!');
                } else {
                    prompt('Copy this link:', url);
                }
                if (typeof umami === 'function') {
                    umami.track('share');
                }
            } catch (err) {
                console.error('Share failed:', err);
                prompt('Copy this link:', url);
            }
        });
    }
});

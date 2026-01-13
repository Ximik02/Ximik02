const content = document.getElementById("content");

function openGame(game) {
  if (game === "dota") {
    content.innerHTML = `
      <div class="card">
        <h2>Dota 2 — роли</h2>
        <ul>
          <li>Carry — фарм, лейт</li>
          <li>Mid — темп и ганги</li>
          <li>Offlane — инициация</li>
          <li>Support — варды</li>
          <li>Hard Support — защита керри</li>
        </ul>
      </div>

      <div class="card">
        <h2>Советы</h2>
        <ul>
          <li>Следи за миникартой</li>
          <li>Не жадничай с тп</li>
          <li>Контроль рун</li>
        </ul>
      </div>
    `;
  }

  if (game === "cs2") {
    content.innerHTML = `
      <div class="card">
        <h2>CS2 — база</h2>
        <ul>
          <li>Настрой микрофон</li>
          <li>FPS выше 100</li>
          <li>Правильная чувствительность</li>
        </ul>
      </div>

      <div class="card">
        <h2>Советы</h2>
        <ul>
          <li>Не беги первым</li>
          <li>Держи прицел на голове</li>
          <li>Слушай шаги</li>
        </ul>
      </div>
    `;
  }
}

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

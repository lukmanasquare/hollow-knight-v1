const layout = (title, content) => `
<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  ${content}
</body>
</html>
`

const homePage = (bosses) => {
  const bossCards = bosses
    .map(
      (boss) => `
      <a href="/bosses/${boss.id}" class="boss-card">
        <img src="${boss.image}" alt="${boss.name}">
        <h3>${boss.name}</h3>
        <p>Health: ${boss.health}</p>
        <p>Location: ${boss.location}</p>
      </a>
    `,
    )
    .join('')

  return layout(
    'Hollow Knight Boss Guide',
    `
    <section class="hero">
      <div class="hero-box">
        <h1>HOLLOW KNIGHT</h1>
        <p>For those who are tired of being repeatedly defeated by bosses 💀</p>
        <a href="#bosses" role="button">All Bosses</a>
      </div>
    </section>

    <main class="container" id="bosses">
      <div class="grid">
        ${bossCards}
      </div>
    </main>
    `,
  )
}

const bossPage = (boss) =>
  layout(
    boss.name,
    `
    <section class="detail-hero">
      <div class="detail-overlay">
        <h1>${boss.name}</h1>
      </div>
    </section>

    <main class="detail-container">
      <div class="boss-detail-card">
        <p><strong>Health:</strong> ${boss.health}</p>
        <p><strong>Location:</strong> ${boss.location}</p>
        <p>${boss.description}</p>
        <img src="${boss.image}" alt="${boss.name}">
        <br><br>
        <a href="/" role="button">Back Home</a>
      </div>
    </main>
    `,
  )

const notFoundPage = () =>
  layout(
    '404 Page Not Found',
    `
    <main class="container">
      <h1>404 Page Not Found</h1>
      <a href="/" role="button">Return Home</a>
    </main>
    `,
  )

module.exports = {
  homePage,
  bossPage,
  notFoundPage,
}

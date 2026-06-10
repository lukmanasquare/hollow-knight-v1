const express = require('express')
const bosses = require('./data')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
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

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Hollow Knight Boss Guide</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
    <link rel="stylesheet" href="/style.css">
  </head>

  <body>

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

  </body>
  </html>
  `)
})

app.get('/bosses/:id', (req, res) => {
  const boss = bosses.find((b) => b.id === parseInt(req.params.id))

  if (!boss) {
    return res.status(404).send(`
      <h1>404 Boss Not Found</h1>
      <a href="/">Return Home</a>
    `)
  }

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>${boss.name}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
    <link rel="stylesheet" href="/style.css">
  </head>

  <body>
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

      <img
        src="${boss.image}"
        alt="${boss.name}"
      >

      <br><br>

      <a href="/" role="button">Back Home</a>

    </div>

  </main>


  </body>
  </html>
  `)
})

app.use((req, res) => {
  res.status(404).send(`
    <h1>404 Page Not Found</h1>
    <a href="/">Return Home</a>
  `)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})

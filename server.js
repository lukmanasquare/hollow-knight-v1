const express = require('express')
const pool = require('./config/database')
const { homePage, bossPage, notFoundPage } = require('./templates/pages')

const app = express()

app.use(express.static('public'))

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bosses ORDER BY id')
    res.send(homePage(result.rows))
  } catch (err) {
    console.error(err)
    res.status(500).send('Database error')
  }
})

app.get('/bosses/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bosses WHERE id = $1', [
      req.params.id,
    ])

    const boss = result.rows[0]

    if (!boss) {
      return res.status(404).send(notFoundPage())
    }

    res.send(bossPage(boss))
  } catch (err) {
    console.error(err)
    res.status(500).send('Database error')
  }
})

app.use((req, res) => {
  res.status(404).send(notFoundPage())
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})

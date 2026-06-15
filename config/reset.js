const pool = require('./database')
const bosses = require('../data')

const createBossesTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS bosses;

    CREATE TABLE IF NOT EXISTS bosses (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      health INTEGER NOT NULL,
      location VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      image VARCHAR(255) NOT NULL
    );
  `

  try {
    await pool.query(createTableQuery)
    console.log('bosses table created successfully')
  } catch (err) {
    console.error('error creating bosses table', err)
  }
}

const seedBossesTable = async () => {
  await createBossesTable()

  bosses.forEach((boss) => {
    const insertQuery = {
      text: `
        INSERT INTO bosses 
        (name, health, location, description, image) 
        VALUES ($1, $2, $3, $4, $5)
      `,
    }

    const values = [
      boss.name,
      boss.health,
      boss.location,
      boss.description,
      boss.image,
    ]

    pool.query(insertQuery, values, (err) => {
      if (err) {
        console.error('error inserting boss', err)
        return
      }

      console.log(`${boss.name} added successfully`)
    })
  })
}

seedBossesTable()

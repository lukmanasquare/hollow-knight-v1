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

  await pool.query(createTableQuery)
  console.log('bosses table created successfully')
}

const seedBossesTable = async () => {
  try {
    await createBossesTable()

    for (const boss of bosses) {
      const insertQuery = `
        INSERT INTO bosses 
        (name, health, location, description, image)
        VALUES ($1, $2, $3, $4, $5)
      `

      const values = [
        boss.name,
        boss.health,
        boss.location,
        boss.description,
        boss.image,
      ]

      await pool.query(insertQuery, values)
      console.log(`${boss.name} added successfully`)
    }
  } catch (err) {
    console.error('error seeding bosses table', err)
  } finally {
    await pool.end()
  }
}

seedBossesTable()

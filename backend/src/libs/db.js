import Database from 'better-sqlite3'

const db = new Database('mydb.sqlite');

// Create table if not exists
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  )
`).run();

module.exports = db;

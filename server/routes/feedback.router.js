const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Get all books
router.get('/', (req, res) => {
  let queryText = 'SELECT title, author FROM "books" ORDER BY "title";';
  pool.query(queryText).then(result => {
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting books', error);
    res.sendStatus(500);
  });
});

router.post('/',  (req, res) => {
    let newBook = req.body;
    console.log(`Adding book`, newBook);
  
    let queryText = `INSERT INTO "books" ("author", "title")
                     VALUES ($1, $2);`;
    pool.query(queryText, [newBook.author, newBook.title])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new book`, error);
        res.sendStatus(500);
      });
  });

  module.exports = router;
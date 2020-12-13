const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET ROUTE
router.get('/', (req, res) => {
    // pulls all info from the database and orders it by date
    let sqlText = `SELECT * FROM "feedback" ORDER BY "date" DESC;`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows); // all the data stored in the database is sent to client-side
    }).catch((error) => {
        console.log('Bad new bears getting the data...', error);
        res.sendStatus(500);
    });
}); // end GET ROUTE
  
// POST ROUTE
router.post('/',  (req, res) => {
    let feedback = req.body; // this is all of the feedback information 
    console.log(`Adding feedback`, feedback);
    
    // all of the feedback information is sent to the database
    let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [feedback.feelings, feedback.understanding, feedback.support, feedback.comments])
        .then((result) => {
            res.sendStatus(201); // returns an OK, it was added
        }).catch((error) => {
            console.log('Bad new bears getting the data...', error);
            res.sendStatus(500);
        });
}); // end POST ROUTE

// PUT ROUTE
router.put('/:id', (req, res) => {
    let id = req.params.id; // identifys which item to change by id

    // updates whether an item is flagged or not in the database from default - false to true
    let sqlText = `UPDATE "feedback" SET "flagged" = true WHERE id = $1;`;
    pool.query(sqlText, [id])
        .then((result) => {
            res.sendStatus(200); // sends an OK - this was updated in database to client-side
        }).catch((error) => {
            console.log('Bad new bears getting the data...', error);
            res.sendStatus(500);
        });
}); // END PUT ROUTE

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    let id = req.params.id; // identifys which item to change by id

    // deletes an item from the database
    let sqlText = `DELETE FROM "feedback" WHERE id = $1;`
    pool.query(sqlText, [id]) 
        .then((result) => { 
            res.sendStatus(200); // sends an OK - this was updated in database to client-side
        }).catch((error) => {
            console.log('Bad new bears getting the data...', error);
            res.sendStatus(500);
        });
}) // end DELETE ROUTE

module.exports = router;
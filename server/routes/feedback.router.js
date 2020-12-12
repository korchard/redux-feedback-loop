const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET ROUTE
router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM "feedback" ORDER BY "date" DESC;`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Bad new bears getting the data...', error);
        res.sendStatus(500);
    });
});
  
// POST ROUTE
router.post('/',  (req, res) => {
    let feedback = req.body;
    console.log(`Adding feedback`, feedback);
    
    let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [feedback[0], feedback[1], feedback[2], feedback[3]])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Bad new bears getting the data...', error);
            res.sendStatus(500);
        });
}); 

module.exports = router;
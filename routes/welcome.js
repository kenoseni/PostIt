const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).render('welcome', {title: 'Postit'})
});


module.exports = router;
const express = require('express');
const router = express.Router();

/* GET dashboard page. */
router.get('/', (req, res, next) => {
    res.status(200).render('dashboard', {title: 'Dashboard'});
});

module.exports = router;
const express = require('express');
const router = express.Router();

/* GET post page.*/ 
router.get('/', (req, res, next) => {
    res.status(200).render('postpage', {title: 'Post'});
});

module.exports = router;
const express = require('express');
const router = express.Router();

/* GET dashboard page. */
router.get('/', (req, res, next) => {
    res.status(200).render('dashboard', {title: 'Dashboard'});
});

router.get('/group/groupid/messages ', (req, res, next) => {
    console.log("get messages");
});


router.post('/group', (req, res, next) => {
    res.send("Create broadcast groups");
});

router.post('/group/groupid/user', (req, res, next) => {
    res.send("add users to group");
});

router.post('/group/groupid/messages', (req, res, next) => {
    res.send("messages posted here");
});

module.exports = router;
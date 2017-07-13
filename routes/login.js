const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router(); // creating an instance of the router

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/* GET login page. */
router.get('/', (req, res, next) => {
    console.log('A request is made');
    res.status(200).render('login', {title: 'Login'})
    next();
});

module.exports = router;

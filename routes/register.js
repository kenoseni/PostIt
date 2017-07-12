const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* GET login page. */
router.get('/', (req, res, next) => {
    res.status(200).render('register', {title: 'Register'})
});
router.post('/user/signup', (req, res, next) => {
    
});

module.exports = router;

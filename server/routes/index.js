const loginController = require('../controllers').User;
const groupController = require('../controllers').groupAdmin;
const messageController = require('../controllers').messageTable;
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Post it App'
    }))
    app.post('/api/user/signin', loginController.signin);

    app.post('/api/user/signup', loginController.signup);

    app.post('/api/group', groupController.create);
}
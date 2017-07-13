const Message = require('../models').message_table;
module.exports = {
    create(req, res) {
        return Message
            .create({
                author: req.body.author,
                content: req.body.content,
                group: req.body.group_admin,
                priority: req.body.priority
            })
            .then(user => res.status(201).send(message_table) )
            .catch(error => res.status(400).send(error));
    },
    
};  
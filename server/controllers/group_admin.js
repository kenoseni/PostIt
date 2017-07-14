const Group = require('../models').Group_admin;
module.exports = {
    create(req, res) {
         if ((req.body.groupName === '') || (typeof (req.body.groupName) !== 'string')) {
            res.status(400).send({ status: false, message: 'Username is required' });
         }
        return Group
            .create({
                groupName: req.body.groupName,
                description: req.body.description 
            })
            .then(group_admin => res.status(201).send(group_admin) )
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Group
            .findAll()
            .then(group_admin => req.status(400).send(group_admin))
            .catch(error => res.status(400).send(error))             
    },
    
    addUser(req, res) {
        const groupId = req.params.groupId;
        const userId = req.body.userId;
        Group.findById(groupId).then((group) => {
            if (!group) {
                res.send('Group not found');
            } else {
                 User.findById(userId).then((user) => {
                     if (!user) {
                         res.send('User not found');
                     } else {
                        group.hasUser(userId).then((result) => {
                            if (result) {
                                 res.send('User Already Exists In This Group');
                            } else {
                                group_admin.addUser(userId);
                                res.send('User Added Successfully');
                            }
                        });
                    }
                });
            }
        })
        .catch(error => res.status(400).send(error));
    },
    postMessage(req, res) {
    const groupId = req.params.groupId;
    const messageToPost = req.body.messageBody;
    return Group.findById(groupId)
      .then((group_admin) => {
        if (!group_admin) {
          return res.sendStatus(404).send({ message: 'Group not found' });
        }
        Message.create({
          messageBody: messageToPost,
          priority: req.body.priority,
          //userId: req.session.user.id,
          groupId: group_admin.id
        });
        return res.send('Message sent');
      })
      .catch(error => res.status(404).send(error));
  },
};  
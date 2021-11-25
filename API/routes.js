const { Router } = require('express');
const controller = require('./controller');
const { authUser } = require('../authentication');

const router = Router();

router.get('/example', controller.getUsers);
router.get('/users', controller.usersPag);
router.get('/filter', controller.filter);
router.get('/unconfirmed', controller.unconfirmed);

//method to get based on their email. has to be post in order to send email in the body
router.post('/user', controller.userByEmail);

router.post('/createUser', controller.createUser);
router.post('/uploadImage', controller.uploadImage);

router.put('/updateUser/:userId', controller.updateUser);
router.put('/updateUnconfirmed', controller.updateUnconfirmed);

module.exports = router;
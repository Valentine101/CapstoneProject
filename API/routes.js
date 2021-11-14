const { Router } = require('express');
const controller = require('./controller');
const { authUser } = require('../authentication');

const router = Router();

router.get('/example', controller.getUsers);
router.get('/users', controller.usersPag);
router.get('/user/:findId', controller.userById);
router.get('/filter', controller.filter);

router.post('/createUser', controller.createUser);

router.put('/updateUser/:userId', controller.updateUser);

module.exports = router;
const express require('express');
const router = express.Router();
const usersController = require('../controllers/userCoontroller'); //imports the user controller


//Get /users
router.get('/', usersController.listUsers);

//GET /users/:id
router.get('/:id', usersCotroller.showUser);

// POST /users
router.post('/:id', usersController.createUser);

//PUT /users/:id
router.put('/', usersController.updateUser);

//DELETE /users/:id
router.delete('/:id', userscontroller.deleteUser);







module.exports = router;

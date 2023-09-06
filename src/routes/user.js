const express = require('express');
const router = express.Router();


const users = require('../data/index'); //imports the array


//----------------GET---------------

//GET /users
router.get('/', (req, res) => {
    res.json(users);
});


// GET /users/:id
router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
});




//POST /users
router.post('/', (req, res) => {
    const newUserId = users.length + 1; //increment the id
    const newUser = { ...sampleUser, id: newUserId }; //modifies sampleUser with new id
    users.push(newUser); // add the new user to the array

    res.status(201).json(newUser); //respond with the newly created user
});



//PUT /users/:id
router.put('/:id', (req, res) => {
    const userId = ParseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const updatedUser = { ...sampleUser, id: userId }; // modifies sample user with existing ID
    users[userIndex] = updatedUser; // Replace the existing user with the updated user

    res.json(updatedUser); // Respond with the updated user
});



//DELETE /users/:id

router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    users.splice(userIndex, 1); // Removes the user from the array

    res.json({ message: 'User deleted' }); //responds with a success message
});





module.exports = router;
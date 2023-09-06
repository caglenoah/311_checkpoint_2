// implement listUsers function 
//export listUsers function

const users = require('../data/index'); //imports the array of user objets



//function to list all users
const listUsers = (req, res) => {
    res.json(users); 
}

module.export = {
    listUsers
};


//show users
const showUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};


//create user
const createUser = (req, res) => {
    const newUserId = users.length + 1;
    const newUser = { ...req.body, id: newUserId };
    users.push(newUser);

    res.status(201).json(newUser);
};



//update user by id
const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const updatedUser = { ...req.body, id: userId };
    user[userIndex] = updatedUser;

    res.json(updatedUser;)
}

const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found ' });
    }
    
    users.splice(userIndex, 1);

    res.json({ message: 'User deleted' });
};








module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser
    
};


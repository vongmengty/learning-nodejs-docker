const userController = require('../controllers/user');

module.exports = (route) => {
    route.get('/user', userController.read);
    route.post('/user', userController.create);
    route.put('/user/:id', userController.update);
    route.delete('/user/:id', userController.delete);
};